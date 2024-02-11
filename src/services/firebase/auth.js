import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from ".";

export async function createUser(email, password) {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;
    return user;
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;

    console.log({ errorCode, errorMessage });
  }
}
