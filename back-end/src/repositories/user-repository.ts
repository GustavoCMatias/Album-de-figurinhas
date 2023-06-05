import { Prisma } from '@prisma/client';
import { prisma } from '@/config';

async function findByEmail(email: string, select?: Prisma.UserSelect) {
   return prisma.user.findUnique({
    where:{
      email
    }
   });
}

async function findByUsername(username: string, select?: Prisma.UserSelect) {
  return prisma.user.findUnique({
   where:{
     username
   }
  });
}

async function create(data: Prisma.UserUncheckedCreateInput) {
  return prisma.user.create({
    data
  });
}

const userRepository = {
  findByEmail,
  findByUsername,
  create,
};

export default userRepository;
