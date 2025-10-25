const API_BASE_URL = import.meta.env.VITE_API_URL; // ✅ Changed this line

export default API_BASE_URL;

// ✅ Register a new user
export const registerUser = async (formData) => {
  const response = await fetch(`${API_BASE_URL}/auth/register`, { // ✅ Added /auth
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });
  return response.json();
};

// ✅ Login
export const loginUser = async (credentials) => {
  const response = await fetch(`${API_BASE_URL}/auth/login`, { // ✅ Added /auth
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  });
  return response.json();
};

// ✅ Get current user profile (requires token)
export const getCurrentUser = async (token) => {
  const response = await fetch(`${API_BASE_URL}/auth/me`, { // ✅ Added /auth
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.json();
};
