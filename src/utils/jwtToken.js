import { baseUrl, headers, handleResponse } from "./api";

export const checkToken = async (token) => {
  const res = await fetch(`${baseUrl}/users/me`, {
    method: "GET",
    headers: {
      ...headers,
      authorization: `Bearer ${token}`,
    },
  });
  return handleResponse(res);
};
