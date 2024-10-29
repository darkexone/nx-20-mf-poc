import { PropsWithChildren } from 'react';
import styles from './context.module.css';
import { UserProvider } from './contexts/UserContext';

export function Context({ children }: PropsWithChildren) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Context!</h1>
      <UserProvider>{children}</UserProvider>
    </div>
  );
}

export default Context;
