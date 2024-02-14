import { UserLogin, Post, Comment } from "@/app/lib/definitions";

const api = process.env.BACKEND_API_URL;

// Log in
export async function getLoginToken(userLogin: UserLogin) {
  // Send request to API then await and return response
  try {
    const jwtoken = await fetch(`${api}/users/login`, {
      method: "POST",
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
export async function getPosts() {
  try {
    const posts = await fetch(`${api}/posts`);
    return posts;
  } catch (error) {
    console.error("Database Error", error);
    throw new Error("Failed to fetch posts.");
  }
}

// Create a new post

// Edit a post

// Delete a post
