import "dotenv/config";
import { PrismaClient } from "../prisma/generated/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { siteReviews } from "./site-reviews";
import { products } from "./products";

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL! });
const prisma = new PrismaClient({ adapter });
async function main() {
     // Purgar base de datos
    await prisma.siteReview.deleteMany();
    
   await prisma.siteReview.createMany({
    data: siteReviews
   });
  
   // Purgar base de datos
    await prisma.product.deleteMany();
    
   await prisma.product.createMany({
    data: products
   });
}
main()