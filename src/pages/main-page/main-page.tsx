import { ReactElement } from 'react';
import { Link } from 'react-router-dom';

import styles from './main-page.module.scss';

function MainPage(): ReactElement {
  return (
    <main className={styles.page}>
      <section className={styles.formData}>
        <Link to="/uncontrolled-form" className={styles.link}>
          Uncontrolled Form
        </Link>
      </section>
      <section>
        <Link to="/react-hook-form" className={styles.link}>
          React Hook Form
        </Link>
      </section>
    </main>
  );
}

export { MainPage };
