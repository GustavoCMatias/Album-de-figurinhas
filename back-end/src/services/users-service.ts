import { User } from '@prisma/client';
import bcrypt from 'bcrypt';
import { duplicatedEmailError, duplicatedUsernameError } from '@/errors';
import userRepository from '@/repositories/user-repository';

export async function createUser({ email, password, username, userphoto }: CreateUserParams): Promise<User> {

  await validateUniqueEmailOrFail(email);
  await validateUniqueUsernameOrFail(username);

  const hashedPassword = await bcrypt.hash(password, 12);
  return userRepository.create({
    email,
    password: hashedPassword,
    username,
    userphoto
  });
}

async function validateUniqueEmailOrFail(email: string) {
  const userWithSameEmail = await userRepository.findByEmail(email);
  if (userWithSameEmail) {
    throw duplicatedEmailError();
  }
}

async function validateUniqueUsernameOrFail(username: string) {
  const userWithSameUsername= await userRepository.findByUsername(username);
  if (userWithSameUsername) {
    throw duplicatedUsernameError();
  }
}

export type CreateUserParams = Pick<User, 'email' | 'password' | 'username' | 'userphoto'>;

const userService = {
  createUser,
};

export default userService;
