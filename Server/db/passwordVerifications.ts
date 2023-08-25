export function verifyPassword(enteredPassword: string): boolean {
  const storedPassword = process.env.SERVER_APP_PASSWORD

  return enteredPassword === storedPassword
}
