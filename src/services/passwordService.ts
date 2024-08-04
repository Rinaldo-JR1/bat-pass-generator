export class PasswordService {
  public generatePassword(): string {
    let password = "";
    let chars: string = "Aa@$#123456789abcdefghijFfGHIJKkLMNOPpZz!";
    let passwordLength = 8;
    for (let i = 0; i < passwordLength; i++) {
      password += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return password;
  }
}
