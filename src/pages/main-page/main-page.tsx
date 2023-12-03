import { ReactElement } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { FormDataTile } from '@/components/form-data-tile';
import { Button } from '@/components/ui';
import { RootState } from '@/store';

import styles from './main-page.module.scss';

function MainPage(): ReactElement {
  const uncontrolledFormData = useSelector((state: RootState) => state.app.uncontrolledFormData);
  const reactHookFormData = useSelector((state: RootState) => state.app.reactHookFormData);

  const hasData = (obj: Record<string, unknown>): boolean => Object.keys(obj).length > 0;

  return (
    <main className={styles.page}>
      <section className={styles.formData}>
        <Link to="/uncontrolled-form">
          <Button>Uncontrolled Form </Button>
        </Link>
        {hasData(uncontrolledFormData) && <FormDataTile data={uncontrolledFormData} />}
      </section>
      <section className={styles.formData}>
        <Link to="/react-hook-form">
          <Button>React Hook Form </Button>
        </Link>
        {hasData(reactHookFormData) && <FormDataTile data={reactHookFormData} />}
      </section>
    </main>
  );
}

export { MainPage };
