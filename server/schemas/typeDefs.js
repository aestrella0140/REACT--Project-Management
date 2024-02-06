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
    Users: [User]
}

type Auth {
    token: ID!
    user: User
}

type Query {
    users: [User]!
    user(userId: ID!): User
    me: User
    projects: [Project]!
    project(projectId: ID!): Project
}

type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    removeUser: User
    createProject(title: Sting!, description: String!, Status: String, priority: String!, Users: [ID]!: User, dependencies: String!)
    updateProject(title: Sting!, description: String!, Status: String, priority: String!, Users: [ID]!: User, dependencies: String!)
    removeProject: Project
}
`;

module.exports = typeDefs;