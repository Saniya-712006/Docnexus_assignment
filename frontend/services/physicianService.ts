import { Physician } from "@/types/physician";

const API_BASE = "http://127.0.0.1:5000";

export const getPhysicians = async (): Promise<Physician[]> => {
  const response = await fetch(`${API_BASE}/physicians`);

  if (!response.ok) {
    throw new Error("Failed to fetch physicians");
  }

  return response.json();
};