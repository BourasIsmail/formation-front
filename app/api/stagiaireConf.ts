import { getCookie, getCookies } from "cookies-next";
import { api } from ".";
import { StagiaireConf } from "../type/StagiaireConf";

export async function getStagiaires(page: number = 0) {
  try {
    const response = await api.get(`/stagiaireConf?page=${page}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export async function getAllStagiaires() {
  try {
    const token = getCookie("token");
    console.log(token);
    const response = await api.get(`/stagiaireConf/all`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export async function getStagiaire(id: number) {
  try {
    const response = await api.get(`/stagiaireConf/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export async function deleteStagiaire(id: number) {
  try {
    const response = await api.delete(`/stagiaireConf/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export async function getStagiairesByProvince(province: string) {
  try {
    const response = await api.get(`/stagiaireConf/byProvince/${province}`);
    return response.data as StagiaireConf[];
  } catch (error) {
    console.log(error);
  }
}
