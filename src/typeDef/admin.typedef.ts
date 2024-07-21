export const adminTypedef = `#graphql
  type Admin {
    id: ID!
    user: User!
    userId: ID!
    fullname: String!
    createdAt: String!
    updatedAt: String!
  }

  type Query {
    admins: [Admin!]!
    admin(id: ID!): Admin
  }

  type Mutation {
    createAdmin(userId: ID!, fullname: String!): Admin
    updateAdmin(id: ID!, fullname: String!): Admin
    deleteAdmin(id: ID!): Admin
  }
  type User {
    id: ID!
    username: String!
    email: String
    profilePhoto: String!
    role: Role!
    admin: Admin
    mahasiswa: Mahasiswa
    dosen: Dosen
    createdAt: String!
    updatedAt: String!
  }
  enum Role {
    ADMIN
    MAHASISWA
    DOSEN
  }
`;
