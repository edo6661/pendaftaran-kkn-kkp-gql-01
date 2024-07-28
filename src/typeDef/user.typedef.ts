export const userTypedef = `#graphql
  type User {
    id: ID!
    username: String!
    email: String
    password: String!
    role: Role!
    profilePhoto: String
    mahasiswa: Mahasiswa
    dosen: Dosen
    admin: Admin
  }
  enum Role {
    ADMIN
    MAHASISWA
    DOSEN
  }
  type Query {
    users: [User!]
    user(id: ID!): User
    authUser: User
  }
  type Mutation {
    signUp(signUpInput: SignUpInput!): User
    signIn(signInInput: SignInInput!): User
    signOut: LogoutResponse
    updateUser(id: ID!, data: UpdateUserInput!): User
    deleteUser(id: ID!): User

  }
  input SignUpInput {
    username: String!
    password: String!
    email: String
    role: Role
    profilePhoto: String
  }
  input SignInInput {
    username: String!
    password: String!
  }
  type LogoutResponse {
    message: String!
  }
  input UpdateUserInput {
    username: String
    email: String
    password: String
    profilePhoto: String
    role: Role
  }
  input SignUpInput {
    username: String!
    email: String
    password: String!
  }


`;
