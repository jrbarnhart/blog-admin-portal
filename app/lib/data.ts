import { UserLogin, Post, Comment } from "@/app/lib/definitions";

// Log in
export async function logIn(userLogin: UserLogin) {
  // Send request to API then await and return response
  try {
    const jwtoken = await fetch(`${process.env.BACKEND_API_URL}/users/login`, {
      body: JSON.stringify(userLogin),
      cache: "no-store",
    });
    return jwtoken;
  } catch (error) {
    console.error("Database Error", error);
    throw new Error("Failed to login.");
  }
}

// Get all the posts data

// Create a new post

// Edit a post

// Delete a post
