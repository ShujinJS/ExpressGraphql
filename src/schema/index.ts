// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.

// Adding #graphql to the beginning of a template literal provides GraphQL syntax highlighting in supporting IDEs.
export const typeDefs = `#graphql
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  # This "Book" type defines the queryable fields for every book in our data source.
  type Pokemon {
    name: String
    url: String
  }

  type User {
    apiKey: String
    name: String!
    password: String!
  }

  type UserResponse {
    message: String!
    user: User
  }

  union GetUsersResponse = UsersResponse | ErrorResponse

  type UsersResponse {
    users: [User]
  }

  type ErrorResponse {
    message: String
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "books" query returns an array of zero or more Books (defined above).
  type Query {
    getPokemons: [Pokemon],
    getUsers(apiKey: String): [User]
  }

  type Mutation {
    addPokemon(name: String!, url: String!): String,
    deletePokemon(name: String!): String,
    updatePokemon(name: String!, updatedName: String!): String,
    login(name: String!, password: String!): UserResponse,
    addUser(name: String!, password: String!): String
  }

  query GetPokemons {
    getPokemons {
      name,
      url
    }
  }

`;
