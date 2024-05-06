import { baseUrl, headers, handleResponse } from "./api";

export const signUp = async (name, password, email, avatar) => {
  const res = await fetch(`${baseUrl}/signup`, {
    method: "POST",
    headers: headers,
    body: JSON.stringify({
      name,
      password,
      email,
      avatar,
    }),
  });
  return handleResponse(res);
};

export const signIn = async (email, password) => {
  const res = await fetch(`${baseUrl}/signin`, {
    method: "POST",
    headers: headers,
    body: JSON.stringify({
      email,
      password,
    }),
  });
  return handleResponse(res);
};
