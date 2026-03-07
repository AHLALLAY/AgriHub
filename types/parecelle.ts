export type Parcelle = {
  id: string;
  userId: string;
  nom: string;
  surface: number;
  typeCulture: string;
  zone: number;
  startPeriod: string;
  endPeriod: string;
  createdAt?: string;
}

export type ParcelleInput = Omit<Parcelle, "id">