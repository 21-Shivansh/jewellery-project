import axios from "axios";

const API_URL = "http://localhost:5000"; // Update with your backend URL

export const fetchProducts = async () => {
  try {
    const response = await axios.get(`${API_URL}/products`);
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
};
