export const dosenTypedef = `#graphql
  type Dosen {
    id: ID!
    fullname: String!
    nidn: String!
    proyek: Proyek
    user: User!
    createdAt: String!
    updatedAt: String!
  }

  type Query {
    dosens: [Dosen!]!
    getDosen(id: ID!): Dosen
  }

  type Mutation {
    createDosen(
      fullname: String!,
      nidn: String!,
      userId: ID!,
      proyekId: ID!
    ): Dosen

    updateDosen(
      id: ID!,
      fullname: String,
      nidn: String,
      userId: ID,
      proyekId: ID
    ): Dosen

    deleteDosen(id: ID!): Dosen
  }
`;
