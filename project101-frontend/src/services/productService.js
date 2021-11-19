import { config } from "./httpConfig";

const { API_URL } = config;

export async function getProducts() {
  let response = await fetch(API_URL + "/products");

  if (!response.ok) {
    throw new Error(`Erreur HTTP ! statut : ${response.status}`);
  }

  return await response.json();
}
