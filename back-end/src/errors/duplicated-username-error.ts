import { ApplicationError } from '@/protocols';

export function duplicatedUsernameError(): ApplicationError {
  return {
    name: 'DuplicatedUsernameError',
    message: 'There is already an user with given username',
  };
}
