
export default defineEventHandler(async (event) => {
  
  const query = getQuery(event);

  let limit = parseInt(query.limit as string);
  let offset = parseInt(query.offset as string);

  limit = isNaN(limit) || limit <= 1 ? 10 : limit;
  offset = isNaN(offset) || offset < 0 ? 0 : offset;

  const products = await prisma.product.findMany({
    take: limit,
    skip: offset 
  })

  const total = await prisma.product.count();
  const totalPages = Math.ceil(total / limit);

  return {
    products,
    totalPages,
    currentPage: offset / limit + 1,
    perPage: limit,
    total
  };

})
