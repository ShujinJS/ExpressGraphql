export const genApiKey = () => {
  return [...Array(32)].map(() => Math.random().toString(36)[2]).join("");
};
