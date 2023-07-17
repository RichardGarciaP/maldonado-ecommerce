import { FAKE_STORE_API } from "@/lib/api";

export const getProducts = () => {
  return FAKE_STORE_API.get("/products");
};

export const getOneProduct = (id) => {
  return FAKE_STORE_API.get(`/products/${id}`);
};
