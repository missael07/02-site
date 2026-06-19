export const useProduct = async (slug: string) => {
  const { data, error, status, execute, pending } = await useFetch(
    `/api/product/${slug}`,
  );

  return {
    data,

    product: data,
    error,
    status,
    execute,
    pending,
  };
};
