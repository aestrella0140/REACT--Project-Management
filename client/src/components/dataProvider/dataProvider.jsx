import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

const client = new ApolloClient({
    uri: 'http://my.graphql.api',
    cache: new InMemoryCache()
});

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

const dataProvider = {

};

export default dataProvider;