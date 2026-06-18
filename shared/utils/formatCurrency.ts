export const formatCurrency = (value: number, currency: string = 'USD'): string => {

      const formatted = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: currency,
      }).format(value);

      return formatted;
}