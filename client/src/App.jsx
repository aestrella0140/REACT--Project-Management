import { Outlet } from 'react-router-dom';
import {
  AppolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, {headers}) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `bearer ${token}` : '',
    },
  };
});

const client = new AppolloClient({
  link: authLink.concat(httpLink), 
  cache: new InMemoryCache(),
});

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <ApolloProvider client={client}>
      
    </ApolloProvider>
  )
}

export default App;
