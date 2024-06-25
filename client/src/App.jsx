import { Outlet } from "react-router-dom";
import * as React from 'react';
import { useState, useEffect } from "react";

import { Admin, Resource, ListGuesser } from 'react-admin';
import buildGraphQlProvider from 'ra-data-graphql-simple';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { authProvider } from './utils/auth';
import dataProvider from "./components/dataProvider/dataProvider";

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

import Nav from "./components/header/nav";
import Footer from './components/footer/index';
import { StoreProvider } from "./utils/GlobalState";
import ProjectList from "./components/projectList";
import CategoryCreate from './components/createCategory';

const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {

  return (
    <ApolloProvider client={client}>
      <Admin
       dataProvider={dataProvider}
      //  authProvider={authProvider}
       >
        <Resource name="projects" list={ProjectList} />
        <Resource name="categories" list={CategoryCreate} />
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh'}}>
        <StoreProvider>
        <Nav />
        <Outlet />
        <Footer />
        </StoreProvider >
      </div>
      </Admin>
    </ApolloProvider>
  );
}

export default App;
