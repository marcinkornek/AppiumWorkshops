import React from 'react';
import RootNavigator from './routes/RootNavigator';
import {QueryClient, QueryClientProvider} from 'react-query';
import FavouritesManager from './utils/FavouritesManager';
import Toast from 'react-native-toast-message';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <FavouritesManager />
      <RootNavigator />
      <Toast />
    </QueryClientProvider>
  );
};

export default App;
