import { gql } from '@apollo/client';

export const ADD_USER = gql`
mutation addUser($firstName: String!, $lastName: String!, $email: String!, $password: String!) {
    addUser(firstName: $firstName, lastName: $lastName, email: $email, password: $password) {
      token
      user {
        _id
        firstName
        lastName
      }
    }
  }
`;

export const LOGIN_USER = gql`
mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        firstName
        lastName
      }
    }
  }
`;

export const REMOVE_USER = gql`
mutation removeUser {
  removeUser {
    _id
    firstName
    lastName
  }
}
`;

// export const CREATE_PROJECT = gql`
// mutation createProject($title: String!, $description: String!, $priority: String!, $users: [ID]!, $dependencies: String!, $status: String, $category: ID!) {
//   createProject(title: $title, description: $description, priority: $priority, Users: $users, dependencies: $dependencies, Status: $status, category: $category) {
//     _id
//     title
//     description
//     Status
//     priority
//     dependencies
//     category {
//       _id
//       type
//     }
//   }
// }
// `;


export const CREATE_PROJECT = gql`
mutation createProject($title: String!, $description: String!, $priority: String!, $Users: String!, $dependencies: String!, $category: ID!, $status: String) {
  createProject(title: $title, description: $description, priority: $priority, Users: $Users, dependencies: $dependencies, category: $category, Status: $status) {
    _id
    Users 
    Status
    category {
      _id
      type
    }
    dependencies
    description
    priority
    title
  }
}
`;

export const REMOVE_PROJECT = gql`
mutation removeProject {
  removeProject {
    _id
    Users 
  }
}
`;

export const UPDATE_PROJECT = gql`
mutation updateProject($title: String!, $description: String!, $priority: String!, $users: String!, $dependencies: String!, $status: String) {
  updateProject(title: $title, description: $description, priority: $priority, Users: $users, dependencies: $dependencies, Status: $status) {
    _id
    title
    description
    Status
    priority
    Users
  }
}
`;