"use client";

import { useFormState, useFormStatus } from "react-dom";

const authenticateUser = async (
  prevState: string | undefined | void,
  formData: FormData
) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/users/login`,
      {
        method: `POST`,
        body: formData,
      }
    );
    console.log(process.env.BACKEND_API_URL);
    // const data = await response.json();
  } catch (error) {
    throw error;
  }
};

export default function LoginForm() {
  const [errorMessage, dispatch] = useFormState(authenticateUser, undefined);

  return (
    <form action={dispatch}>
      <div>
        <label htmlFor="username">Email:</label>
        <input
          className="text-black"
          type="text"
          id="username"
          name="username"
          placeholder="example@domain.com"
          required
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          className="text-black"
          type="password"
          id="password"
          name="pasword"
          required
        />
      </div>
      <button type="submit">Log In</button>
    </form>
  );
}
