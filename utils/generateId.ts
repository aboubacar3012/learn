export function generateId() {
    const characters = "0123456789abcdef";
    let id = "";
  
    for (let i = 0; i < 24; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      id += characters[randomIndex];
    }
  
    return id;
  }