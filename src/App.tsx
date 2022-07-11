import React from 'react';
import RootNavigator from './routes/RootNavigator';
import {QueryClient, QueryClientProvider} from 'react-query';
import FavouritesManager from './utils/FavouritesManager';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <FavouritesManager />
      <RootNavigator />
    </QueryClientProvider>
  );
};

export default App;
