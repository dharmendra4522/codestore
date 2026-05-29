const LOCAL_API = "http://localhost:4000/users";

const API_URL = (typeof window !== 'undefined' && window.__USE_LOCAL_API__) ? LOCAL_API : LOCAL_API;

export async function createUser(formData) {
  const url = API_URL;
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });

  if (!response.ok) {
    throw new Error("Failed to submit form.");
  }

  return response.json();
}

export async function fetchUsers() {
  const url = API_URL;
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Failed to fetch users.");
  }

  return response.json();
}
