import { ReactElement } from 'react';
import { Link } from 'react-router-dom';

import { Button } from '@/components/button';

import styles from './main-page.module.scss';

function MainPage(): ReactElement {
  return (
    <main className={styles.page}>
      <section className={styles.formData}>
        <Button>
          <Link to="/uncontrolled-form" className={styles.link}>
            Uncontrolled Form
          </Link>
        </Button>
      </section>
      <section>
        <Button>
          <Link to="/react-hook-form" className={styles.link}>
            React Hook Form
          </Link>
        </Button>
      </section>
    </main>
  );
}

export { MainPage };
