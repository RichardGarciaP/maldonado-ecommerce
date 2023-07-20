import { FAKE_STORE_API } from "@/lib/api";
import { db } from "@/lib/firebase";

export const getProducts = () => {
  // const data = db.collection("products").doc().get();
  // console.log({ data });
  return FAKE_STORE_API.get("/products");
};

export const getOneProduct = (id) => {
  return FAKE_STORE_API.get(`/products/${id}`);
};
