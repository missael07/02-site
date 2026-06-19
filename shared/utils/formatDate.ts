export const dayMontYearFormat = (date: Date) => {
     return new Date(date).toLocaleString('es-MX', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
      });
}