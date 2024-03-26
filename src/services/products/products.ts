import axios from "axios";

export function fetchProducts() {
  return axios.get("https://fakestoreapi.com/products");
}

export function fetchProduct(id: string | undefined) {
  return axios.get(`https://fakestoreapi.com/products/${id}`);
}
