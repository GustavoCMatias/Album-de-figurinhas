import { Request, Response } from 'express';
import httpStatus from 'http-status';
import userService, { CreateUserParams } from '@/services/users-service';

export async function usersPost(req: Request, res: Response) {
  const { email, password, username, userphoto } = req.body as CreateUserParams;

  try {
    const user = await userService.createUser({ email, password, username, userphoto });
    return res.status(httpStatus.CREATED).json({
      id: user.id,
      email: user.email,
    });
  } catch (error) {
    if (error.name === 'DuplicatedEmailError') {
      return res.status(httpStatus.CONFLICT).send(error);
    }
    return res.status(httpStatus.BAD_REQUEST).send(error);
  }
}
