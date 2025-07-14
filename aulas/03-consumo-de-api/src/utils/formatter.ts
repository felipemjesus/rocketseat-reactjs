export const dateFormatter = (dateString: string): string => {
  return new Intl.DateTimeFormat('pt-BR').format(new Date(dateString));
}

export const priceFormatter = (value: number): string => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value);
}
