import * as jwt from 'jsonwebtoken';
import { User } from '@prisma/client';

import { createUser } from './factories';
import { createSession } from './factories/sessions-factory';
import { prisma } from '@/config';

export async function cleanDb() {
  await prisma.session.deleteMany({});
  await prisma.user.deleteMany({});
  await prisma.friend.deleteMany({});
  await prisma.album.deleteMany({});
  await prisma.page.deleteMany({});
  await prisma.figurinha.deleteMany({});
  await prisma.userFigurinha.deleteMany({});
  await prisma.trade.deleteMany({});
}

export async function generateValidToken(user?: User) {
  const incomingUser = user || (await createUser());
  const token = jwt.sign({ userId: incomingUser.id }, process.env.JWT_SECRET);

  await createSession(token);

  return token;
}
