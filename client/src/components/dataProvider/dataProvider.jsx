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

const dataProvider = {

};

export default dataProvider;