import React from 'react';
import { Layout } from './components/Layout';

import EnterNames from './components/EnterNames';
import InstallPrompt from './components/InstallPrompt';

const App = () => {
  return (
    <Layout>
      <InstallPrompt/>
      <EnterNames />
    </Layout>
  );
};

export default App;