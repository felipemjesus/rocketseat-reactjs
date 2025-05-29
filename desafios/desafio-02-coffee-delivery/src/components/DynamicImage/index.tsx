export function DynamicImage({ src, alt }: { src: string; alt: string }) {
  return (
    <img
      src={new URL(`../../assets/${src}`, import.meta.url).href}
      alt={alt}
      loading="lazy"
    />
  )
}
