import { useState } from "react";

export default function useToken() {
  const [token, setToken] = useState(localStorage.getItem("token"));
  return { token, setToken };
}
