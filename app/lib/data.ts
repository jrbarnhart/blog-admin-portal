import { UserLogin, Post, Comment } from "@/app/lib/definitions";

const api = "";

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
