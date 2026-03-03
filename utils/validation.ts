const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateFullName(fullName: string): string | null {
    if (!fullName.trim()) return "Le nom et le prènom sont requis";
    return null;
}

export function validateEmail(email: string): string | null {
    if (!email.trim()) return "L\'email est requis";
    if (!EMAIL_REGEX.test(email)) return "Format d'email invalide";
    return null;
}

export function validatePassword(password: string): string | null {
    if (!password.trim()) return "Le mot de passe est requis";
    if (password.length < 8) return "Le mot de passe doit contenir au moins 8 caractères";
    return null;
}

export function validateConfirmationPassword(password: string, confirmedPassword: string): string | null {
    if (password !== confirmedPassword) return "Les mots de passe ne correspondent pas";
    return null;
}