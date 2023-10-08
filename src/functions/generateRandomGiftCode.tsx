export const generateRandomGiftCode: () => string = () => {
  const characters: string = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let code: string = "";
  for (let i = 0; i < 8; i++) {
    const randomIndex: number = Math.floor(Math.random() * characters.length);
    code += characters.charAt(randomIndex);
  }
  return code;
};
