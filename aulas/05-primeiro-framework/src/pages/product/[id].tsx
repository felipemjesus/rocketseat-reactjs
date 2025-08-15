import { stripe } from "@/lib/stripe";
import { ImageContainer, ProductContainer, ProductDetails } from "@/styles/pages/product";
import axios from "axios";
import { GetStaticPaths, GetStaticProps } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import Stripe from "stripe";

interface ProductProps {
  product: {
    id: string;
    name: string;
    imageUrl: string;
    price: string;
    description: string;
    defaultPriceId: string
  }
}

export default function Product(props: ProductProps) {
  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] = useState(false)

  async function handleBuyProduct() {
    setIsCreatingCheckoutSession(true)

    try {
      const response = await axios.post('/api/checkout', {
        priceId: props.product.defaultPriceId
      })

      const { checkoutUrl } = response.data

      window.location.href = checkoutUrl
    } catch (err) {
      setIsCreatingCheckoutSession(false)

      console.log(err)
      alert('Falha ao redirecionar ao checkout!')
    }
  }

  return (
    <ProductContainer>
      <ImageContainer>
        <Image src={props.product.imageUrl} width={520} height={480} alt="" />
      </ImageContainer>

      <ProductDetails>
        <h1>{props.product.name}</h1>
        <span>{props.product.price}</span>

        <p>{props.product.description}</p>

        <button
          onClick={handleBuyProduct}
          disabled={isCreatingCheckoutSession}
        >
          Comprar agora
        </button>
      </ProductDetails>
    </ProductContainer>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking"
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const productId = String(params?.id)

  const product = await stripe.products.retrieve(productId, {
    expand: ['default_price']
  })

  const price = product.default_price as Stripe.Price

  const amount = price.unit_amount || 0

  return {
    props: {
      product: {
        id: product.id,
        name: product.name,
        imageUrl: product.images[0],
        price: new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        }).format(amount / 100),
        description: product.description,
        defaultPriceId: price.id
      }
    },
    revalidate: 60 * 60 * 1,  // 1 hour
  }
}
