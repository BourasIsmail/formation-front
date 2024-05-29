import { api } from ".";

export async function getStagiaires(page: number = 0) {
  try {
    const response = await api.get(`/stagiaire?page=${page}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export async function getAllStagiaires() {
  try {
    const response = await api.get(`/stagiaire/all`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export async function getStagiaire(id: number) {
  try {
    const response = await api.get(`/stagiaire/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
