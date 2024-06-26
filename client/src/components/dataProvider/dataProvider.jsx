import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

const client = new ApolloClient({
  uri: "http://my.graphql.api",
  cache: new InMemoryCache(),
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

 export const CREATE_CATEGORY = gql`
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

const CREATE_PROJECT = gql`
  mutation createProject(
    $title: String!
    $description: String!
    $priority: String!
    $Users: String!
    $dependencies: String!
    $category: ID!
    $status: String
  ) {
    createProject(
      title: $title
      description: $description
      priority: $priority
      Users: $Users
      dependencies: $dependencies
      category: $category
      Status: $status
    ) {
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

const UPDATE_PROJECT = gql`
  mutation updateProject(
    $title: String!
    $description: String!
    $priority: String!
    $users: String!
    $dependencies: String!
    $status: String
  ) {
    updateProject(
      title: $title
      description: $description
      priority: $priority
      Users: $users
      dependencies: $dependencies
      Status: $status
    ) {
      _id
      title
      description
      Status
      priority
      Users
    }
  }
`;

const REMOVE_PROJECT = gql`
  mutation removeProject {
    removeProject {
      _id
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
  getList: async (resource, params) => {
    if (resource === "projects") {
      const { data } = await client.query({
        query: QUERY_PROJECTS,
        variables: { category: params.filter.category },
      });
      return { data: data.projects };
    } else if (resource === "categories") {
      const { data } = await client.query({ query: QUERY_CATEGORIES });
      return { data: data.categories };
    }
  },

  getOne: async (resource, params) => {
    if (resource === "projects") {
      const { data } = await client.query({
        query: QUERY_SINGLE_PROJECT,
        variables: { projectId: params.id },
      });
      return { data: data.project };
    }
  },

  create: async (resource, params) => {
    if (resource === "projects") {
      const { data } = await client.mutate({
        mutation: CREATE_PROJECT,
        variables: params.data,
      });
      return { data: data.createProject };
    } else if (resource === "categories") {
      const { data } = await client.mutate({
        mutation: CREATE_CATEGORY,
        variables: params.data,
      });
      return { data: data.createCategory };
    }
  },

  update: async (resource, params) => {
    if (resource === "projects") {
      const { data } = await client.mutate({
        mutation: UPDATE_PROJECT,
        variables: params.data,
      });
      return { data: data.updateProject };
    } else if (resource === "categories") {
      const { data } = await client.mutate({
        mutation: CREATE_CATEGORY,
        variables: params.data,
      });
      return { data: data.updateCategory };
    }
  },

  delete: async (resource, params) => {
    if (resource === "projects") {
      await client.mutate({
        mutation: REMOVE_PROJECT,
        variables: { id: params.id },
      });
      return { data: params.previousData };
    }
  },
};

export default dataProvider;
