import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

const client = new ApolloClient({
    uri: 'http://my.graphql.api',
    cache: new InMemoryCache()
});
// mutations
const REMOVE_USER = gql`
mutation removeUser {
    removeUser {
        _id
        firstName
        lastName
    }
}
`;

const CREATE_CATEGORY = gql`
mutation CreateCategory($type: String!) {
    createCategory(type: $name) {
        id
        type
    }
}
`;

const UPDATE_CATEGORY = gql`
mutation CreateCategory($type: String!) {
    createCategory(type: $type) {
        id
        type
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

// queries

const QUERY_USERS = gql`
query allUsers {
    users {
      _id
      firstName
      lastName
    }
  }
`;

const QUERY_PROJECTS = gql`
query getProjects($category: ID) {
  projects(category: $category) {
    _id
    title
    description
    priority
    dependencies
    Status
    category {
      _id
    }
  }
}
`;

const QUERY_SINGLE_PROJECT = gql`
query singleProject($projectId: ID!) {
    project(projectId: $projectId) {
      _id
      Users {
        _id
        firstName
        lastName
      }
    }
  }
`;

const QUERY_CATEGORIES = gql`
{
  categories {
    _id
    type
  }
}
`;

const dataProvider = {

};

export default dataProvider;