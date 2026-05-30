import { Physician } from "@/types/physician";

const API_BASE = "http://127.0.0.1:5000";

export const getPhysicians = async (
  specialty?: string,
  state?: string,
  affiliation?: string,  
  registrationYear?: string
): Promise<Physician[]> => {

  const params = new URLSearchParams();

  if (specialty) {
    params.append("specialty", specialty);
  }

  if (state) {
    params.append("state", state);
  }

  if (affiliation) {
    params.append("affiliation", affiliation);
  }

  if (registrationYear) {
  params.append(
    "registrationYear",
    registrationYear
  );
}

  const response = await fetch(
    `${API_BASE}/physicians?${params.toString()}`
  );

  return response.json();
};