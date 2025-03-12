const restApiUrl = "http://localhost:3030";

// Resolvers define how to fetch the types defined in your schema.
// This resolver retrieves books from the "books" array above.
export const resolvers = {
  Query: {
    getPokemons: async () => {
      const response = await fetch(`${restApiUrl}/pokemons`);
      const pokemons = await response.json();
      return pokemons;
    },
    getUsers: async () => {
      const response = await fetch(`${restApiUrl}/users`);
      const users = await response.json();
      return users;
    },
  },
  Mutation: {
    addPokemon: async (_, { name, url }) => {
      const response = await fetch(`${restApiUrl}pokemons/add`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, url }),
      });
      const message = await response.text();
      return message;
    },
    deletePokemon: async (_, { name }) => {
      const response = await fetch(`${restApiUrl}pokemons/delete/${name}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name }),
      });
      const message = await response.text();
      return message;
    },
    updatePokemon: async (_, { name, updatedName }) => {
      const response = await fetch(`${restApiUrl}pokemons/update/${name}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, updatedName }),
      });
      const message = await response.text();
      return message;
    },
    addUser: async (_, { name, password }) => {
      const response = await fetch(`${restApiUrl}/users/add`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, password }),
      });
      const message = await response.text();
      return message;
    },
    login: async (_, { name, password }) => {
      const response = await fetch(`${restApiUrl}/users/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, password }),
      });

      const user = await response.json();
      return user;
    },
  },
};
