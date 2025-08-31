import { FormContainer, ImageContainer, LoginContainer } from "./styles";
import Image from "next/image";
import logoImg from "../../assets/logo.svg";

export function Login() {
  return (
    <LoginContainer>
      <ImageContainer>
        <Image src={logoImg} alt="" />
      </ImageContainer>

      <FormContainer>
        <h1>Faça login</h1>

        <input type="email" placeholder="E-mail" />
        <input type="password" placeholder="Senha" />

        <button type="submit">Entrar</button>
      </FormContainer>
    </LoginContainer>
  );
}
