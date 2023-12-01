import { ReactElement } from 'react';
import { Link, Outlet } from 'react-router-dom';

import styles from './page-layout.module.scss';

function PageLayout(): ReactElement {
  return (
    <>
      <header className={styles.header}>
        <Link to={'/'} className={styles.link}>
          Home
        </Link>
      </header>
      <Outlet />
    </>
  );
}

export { PageLayout };
