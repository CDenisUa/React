import React from 'react';
import { ApolloProvider } from "@apollo/react-hooks";

// Other
import { client } from './init/client';


const App = () => (
    <ApolloProvider client={client}>
        <>My app</>
    </ApolloProvider>
);

export default App;
