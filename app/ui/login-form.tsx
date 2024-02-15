"use client";

import { useFormState } from "react-dom";
import { useRouter } from "next/navigation";
import { useRef } from "react";

export default function LoginForm() {
  const router = useRouter();

  const ref = useRef<HTMLFormElement>(null);

  const authenticateUser = async (
    prevState: string | undefined | void,
    formData: FormData
  ) => {
    try {
      const body = {
        username: formData.get("username"),
        password: formData.get("password"),
      };

      const response = await fetch(`http://localhost:8000/users/login`, {
        method: `POST`,
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });

      const data = await response.json();

      if (!data.success) {
        // Login unsuccessful so clear form and return error string
        ref.current?.reset();
        return "Incorrect login information.";
      } else {
        // Login successful so save token and redirect to /dashboard
        localStorage.setItem("token", data.token);
        router.push("/dashboard");
      }
    } catch (error) {
      throw error;
    }
  };

  const [errorMessage, dispatch] = useFormState(authenticateUser, undefined);

  return (
    <form action={dispatch} ref={ref}>
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
          name="password"
          required
        />
      </div>
      <button type="submit">Log In</button>
      <div
        className="flex h-8 items-end space-x-1"
        aria-live="polite"
        aria-atomic="true"
      >
        {errorMessage !== undefined && (
          <>
            <p className="text-sm text-red-500">{errorMessage}</p>
          </>
        )}
      </div>
    </form>
  );
}
