// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';
import { Products } from '@react-monorepo/products';

import NxWelcome from './nx-welcome';

export function App() {
  return (
    <div>
      <Products />
      <NxWelcome title="remote1" />
    </div>
  );
}

export default App;
