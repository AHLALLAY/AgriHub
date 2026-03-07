export function validateName(name: string): string | null {
  if (!name.trim()) return "Le nom est requis";
  return null;
}

export function validateArea(area: number): string | null {
  if (!area) return "La surface est requis";
  if (area < 0) return "Le chiffre doit être positif";
  return null;
}

export function validateCulture(culture: string): string | null {
  if (!culture.trim()) return "Le type de culture est requis";
  return null;
}

export function validateZone(zone: number): string | null {
  if (!zone) return "Le numéro de la zone est requis";
  if (zone < 0) return "Le chiffre doit être positif";
  return null;
}

export function validatePeriod(start: Date, end: Date): string | null {
  if (!start || !end) return "La période est requis";
  if (end < start) {
    return "La date de fin doit être supérieure à celle de début";
  }

  if (
    new Date(start).setHours(0, 0, 0, 0) <
    new Date(new Date()).setHours(0, 0, 0, 0)
  ) {
    return "La date de démarrage doit être supérieure ou égale à aujourd'hui";
  }
  return null;
}
