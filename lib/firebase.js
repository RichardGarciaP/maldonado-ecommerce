import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  doc,
  updateDoc,
} from "firebase/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCCcjyjGotvHUyf3QaJwxyw6x_eiHvmiqQ",
  authDomain: "maldonado-ecommerce.firebaseapp.com",
  projectId: "maldonado-ecommerce",
  storageBucket: "maldonado-ecommerce.appspot.com",
  messagingSenderId: "457307748045",
  appId: "1:457307748045:web:0d4dbed971720e27499b84",
  measurementId: "G-M5VXR45DQQ",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export const getProducts = async () => {
  const productsCol = collection(db, "products");
  const productsSnapshot = await getDocs(productsCol);
  const productsList = productsSnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  return productsList.reverse();
};

export const getOneProducts = async (id, products) => {
  return products.find((product) => product.id === id);
};

export const getRelatedProducts = async (id, products) => {
  return products.filter((product) => product.id !== id);
};

export const updateQty = async (id, item) => {
  const productRef = doc(db, "products", id);
  // console.log("currentProductRef", currentProductRef, "item", item);
  const products = await getProducts();
  const currentProduct = products.find((product) => product.id === id);
  console.log(currentProduct);
  await updateDoc(productRef, {
    ...currentProduct,
    qty: currentProduct.qty - item.quantity,
  });
};
