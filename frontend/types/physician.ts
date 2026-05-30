export interface Physician {
  id: string;
  npi: string;
  firstName: string;
  lastName: string;
  specialty: string;
  subSpecialty: string | null;
  affiliation: string;
  city: string;
  state: string;
  email: string;
  npiRegistrationYear: number;
  acceptingPatients: boolean;
  boardCertified: boolean;
}