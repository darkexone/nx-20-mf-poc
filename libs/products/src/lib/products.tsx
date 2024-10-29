import { useUser } from '@react-monorepo/context';
import styles from './products.module.css';

export function Products() {
  const { user } = useUser();
  return (
    <div className={styles['container']}>
      <h1>Welcome to Products!</h1>
      <p>User: {user?.name ?? 'null'}</p>
    </div>
  );
}

export default Products;
