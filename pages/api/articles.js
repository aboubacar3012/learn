import { generateId } from './../../utils/generateId';

  // Fonction pour générer un titre aléatoire
  function generateRandomTitle() {
   return "Article " + Math.floor(Math.random() * 100 + 10) 
  }
  
  // Fonction pour générer un contenu d'article aléatoire
  function generateRandomContent() {
    const loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
    // Vous pouvez remplacer le contenu statique par une génération de texte aléatoire plus complexe si nécessaire
    return loremIpsum;
  }
  
  // Fonction pour générer un créateur aléatoire
  function generateRandomCreator() {
    const creators = ["Haley Morgan", "Jessica Lee", "Mark Davis", "Emily Wilson", "Alexis Chen"];
    const randomIndex = Math.floor(Math.random() * creators.length);
    return creators[randomIndex];
  }
  
  // Fonction pour générer un email aléatoire
  function generateRandomEmail() {
    const domains = ["gmail.com", "yahoo.com", "hotmail.com", "example.com", "fortean.com"];
    const randomIndex = Math.floor(Math.random() * domains.length);
    const domain = domains[randomIndex];
    const randomString = Math.random().toString(36).substring(7); // Génère une chaîne aléatoire pour le nom d'utilisateur
    return randomString + "@" + domain;
  }
  
  // Fonction pour générer une date aléatoire
  function generateRandomDate() {
    const startDate = new Date(2010, 0, 1); // Date de début (1er janvier 2010)
    const endDate = new Date(); // Date actuelle
  
    const randomTimestamp = startDate.getTime() + Math.random() * (endDate.getTime() - startDate.getTime());
    const randomDate = new Date(randomTimestamp);
  
    return randomDate.toISOString(); // Convertit la date en format ISO (YYYY-MM-DDTHH:mm:ss.sssZ)
  }

  function generateObjects(number) {
    const objects = [];
  
    for (let i = 0; i < number; i++) {
      const object = {
        publicId: generateId(),
        title: generateRandomTitle(),
        articleContent: generateRandomContent(),
        creator: generateRandomCreator(),
        creatorEmail: generateRandomEmail(),
        createdAt: generateRandomDate()
      };
  
      objects.push(object);
    }
  
    return objects;
  }
  
  // Utilisation de la fonction generateObjects()
  const generatedObjects = generateObjects(100);

  const articles = {
    "result": "success",
    "articles": generatedObjects
}
export default function handler(req, res) {
    res.status(200).json(articles)
}
  