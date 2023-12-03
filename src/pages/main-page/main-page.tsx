import { ReactElement } from 'react';
import { Link } from 'react-router-dom';

import { Button } from '@/components/ui';

import styles from './main-page.module.scss';

function MainPage(): ReactElement {
  return (
    <main className={styles.page}>
      <section className={styles.formData}>
        <Link to="/uncontrolled-form">
          <Button>Uncontrolled Form </Button>
        </Link>
      </section>
      <section>
        <Link to="/react-hook-form">
          <Button>React Hook Form </Button>
        </Link>
      </section>
    </main>
  );
}

export { MainPage };
