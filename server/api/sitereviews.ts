export default defineEventHandler(async () => {
  const reviews = await prisma.siteReview.findMany();
  return reviews;
});