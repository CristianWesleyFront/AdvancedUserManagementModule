import { Outlet } from 'react-router-dom';
import { AuthInit } from './components/Auth';
import Layout from './components/Layout';

function App() {
  return (
    <AuthInit>
      <Layout>
        <Outlet />
      </Layout>
    </AuthInit>
  );
}

export default App;
