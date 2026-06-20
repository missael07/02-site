import "dotenv/config";
import { PrismaClient } from "../prisma/generated/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { siteReviews } from "./site-reviews";
import { products } from "./products";
import { users } from './users-seed';

import bcrypt from 'bcryptjs';


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

   // Purgar base de datos
    await prisma.user.deleteMany();
    
   const usersWithHashesPassword = users.map(user => ({
      ...user,
      password: bcrypt.hashSync(user.password, bcrypt.genSaltSync(10))
   }))
   
   await prisma.user.createMany({
    data: usersWithHashesPassword
   });
}
main()