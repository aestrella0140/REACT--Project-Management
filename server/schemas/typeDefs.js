const typeDefs = `
type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
    Projects: [Project]
}

type Project {
    _id: ID
    title: String
    description: String
    Status: String
    priority: String
    Users: [ID]
    dependencies: String
    category: Category
}

type Category {
    _id: ID
    type: String
}

type Auth {
    token: ID!
    user: User
}

type Query {
    users: [User]!
    user(userId: ID!): User
    me: User
    categories: [Category]
    projects(category: ID, type: String): [Project]
    project(_id: ID!): Project
}

type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    updateUser(firstName: String, lastName: String, email: String, password: String): User
    login(email: String!, password: String!): Auth
    removeUser(userId: ID!): User
    createProject(title: String!, description: String!, Status: String, priority: String!, Users: [UserInput]!, dependencies: String, category: ID!): Project
    updateProject(title: String!, description: String!, Status: String, priority: String!, Users: [UserInput]!, dependencies: String, category: ID!): Project
    removeProject(projectId: ID!): Project
}

input UserInput {
    firstName: String!
    lastName: String
}
`;

module.exports = typeDefs;