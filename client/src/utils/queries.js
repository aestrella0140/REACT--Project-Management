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
query projects {
    projects {
      _id
      Users {
        _id
        firstName
        lastName
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
query Query($projectId: ID!) {
  project(projectId: $projectId) {
    category {
      _id
      team
    }
  }
}
`;