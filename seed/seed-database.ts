import "dotenv/config";
import { PrismaClient } from "../prisma/generated/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { siteReviews } from "./site-reviews";

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL! });
const prisma = new PrismaClient({ adapter });
async function main() {
     // Purgar base de datos
    await prisma.siteReview.deleteMany();
    
   await prisma.siteReview.createMany({
    data: siteReviews
  });
}
main()