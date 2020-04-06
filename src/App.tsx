import React from 'react';
import { Layout } from 'antd';

import { AppHeader, ContentContainer } from './components';
import { CalendarScreen } from './screens';

import './App.css';

function App() {
  return (
    <Layout className="ac-app">
      <Layout.Header>
        <AppHeader />
      </Layout.Header>
      <Layout.Content>
        <ContentContainer>
          <CalendarScreen />
        </ContentContainer>
      </Layout.Content>
    </Layout>
  );
}

export default App;
