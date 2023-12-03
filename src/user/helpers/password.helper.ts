import * as bcrypt from 'bcrypt';

export async function bcryptPassword(password: string) {
  let hashedPassword: string;
  let salt: string;
  try {
    salt = await bcrypt.genSalt();
    hashedPassword = await bcrypt.hash(password, salt);
  } catch (error) {
    console.log(error);
  }

  return hashedPassword;
}

export async function decryPassword(password: string, hashedPassword: string) {
  let isHashedPassword: boolean;
  try {
    isHashedPassword = await bcrypt.compare(password, hashedPassword);
  } catch (error) {
    console.log(error);
  }

  return isHashedPassword;
}
