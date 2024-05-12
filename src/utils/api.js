export const baseUrl = "http://localhost:3001";

export const headers = {
  "Content-Type": "application/json",
};

export const handleResponse = (res) => {
  return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
};

export function request(baseUrl, options) {
  return fetch(baseUrl, options).then(handleResponse);
}

export function editUserInfo(name, avatar) {
  const token = localStorage.getItem("token");
  return fetch(`${baseUrl}/users/me`, {
    method: "PATCH",
    headers: {
      ...headers,
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ name, avatar }),
  }).then((res) => handleResponse(res));
}

export function getItemsList() {
  return request(`${baseUrl}/items`, {
    headers: headers,
  });
}
// const getItems = async () => {
//   const res = await fetch(`${baseUrl}/items`, {
//     method: "GET",
//     headers: headers,
//   });
//   return handleServerResponse(res);
// };

export function addItem({ name, weather, imageUrl }) {
  const token = localStorage.getItem("token");
  return request(`${baseUrl}/items`, {
    method: "POST",
    headers: { ...headers, authorization: `Bearer ${token}` },
    body: JSON.stringify({ name, imageUrl, weather }),
  }).then((res) => handleResponse(res));
}

export function deleteItem(_id) {
  return request(`${baseUrl}/items/${_id}`, {
    method: "DELETE",
    headers: headers,
  });
}

export function addLike(id) {
  return fetch(`${baseUrl}/items/${id}/likes`, {
    method: "PUT",
    headers: {
      ...headers,
      authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  }).then((res) => handleResponse(res));
}

export function removeLike(id) {
  return fetch(`${baseUrl}/items/${id}/likes`, {
    method: "DELETE",
    headers: {
      ...headers,
      authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  }).then((res) => handleResponse(res));
}
