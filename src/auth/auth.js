export const authenticate = (email, password) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        name: "Lia Thompson",
        dateOfBirth: "08/11/1986",
        email: "lia.thompson@gmail.com",
        secretQuestion: "What Is My Favourite Movie?",
        secretAnswer: "Inception",
      });
    }, 2000);
  });
};
