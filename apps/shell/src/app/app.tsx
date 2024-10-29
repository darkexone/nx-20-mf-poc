import * as React from 'react';

import NxWelcome from './nx-welcome';

import { Link, Route, Routes } from 'react-router-dom';
import { Context, useUser } from '@react-monorepo/context';

const Remote1 = React.lazy(() => import('remote1/Module'));

const UserInfo = () => {
  const { user } = useUser();
  return <p>User: {user?.name ?? 'null'}</p>;
};

const LogUser = () => {
  const { setUser } = useUser();
  return (
    <button
      onClick={() =>
        setUser({
          id: '1',
          name: 'User 1',
          email: 'user1@emplo.pl',
        })
      }
    >
      Log User 1
    </button>
  );
};

export function App() {
  return (
    <React.Suspense fallback={null}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/remote1">Remote1</Link>
        </li>
      </ul>
      <Context>
        <UserInfo />
        <LogUser />
        <Routes>
          <Route path="/" element={<NxWelcome title="shell" />} />
          <Route path="/remote1" element={<Remote1 />} />
        </Routes>
      </Context>
    </React.Suspense>
  );
}

export default App;
