import { gql } from '@apollo/client';

export const QUERY_USERS = gql`
query allUsers {
    users {
      _id
      firstName
      lastName
    }
  }
`;

export const QUERY_SINGLE_USER = gql`
query singleUser ($userId: ID!) {
    user(userId: $userId) {
      _id
      firstName
      lastName
    }
  }
`;

export const QUERY_ME = gql`
query me {
    me {
      _id
      firstName
      lastName
    }
  }
`;

export const QUERY_PROJECTS = gql`
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

export const QUERY_SINGLE_PROJECT = gql`
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

export const QUERY_PROJECTS_ID = gql`
query projectsCategoryId($projectId: ID!) {
  project(projectId: $projectId) {
    category {
      _id
      type
    }
  }
}
`;

export const QUERY_CATEGORIES = gql`
{
  categories {
    _id
    type
  }
}
`;