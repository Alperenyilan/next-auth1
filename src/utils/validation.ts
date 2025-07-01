export function isValidEmail(email: string): boolean {
  return /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email);
}

export function isValidRole(role: string): boolean {
  return ['user', 'admin'].includes(role);
} 