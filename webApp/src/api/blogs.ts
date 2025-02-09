// const API_BASE = "http://localhost:3001/api/v1";
const API_BASE = import.meta.env.REACT_APP_API_URL;
const handleResponse = async (response: Response) => {
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || "Request failed");
  }
  return response.json();
};

export const blogsApi = {
  getPublished: () => fetch(`${API_BASE}/blogs/published`).then(handleResponse),
  getById: (id: string) =>
    fetch(`${API_BASE}/blogs/${id}`).then(handleResponse),
};
