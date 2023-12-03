import { ReactElement } from 'react';
import { UseFormRegister } from 'react-hook-form';

import { ErrorMessage } from '@/components/ui';
import { ReactHookFormData } from '@/pages/react-hook-form';
import styles from '@/styles/form.module.scss';

type Props = {
  register?: UseFormRegister<ReactHookFormData>;
  errorMessage?: string;
};

function ImageLoader({ register, errorMessage = '' }: Props): ReactElement {
  return (
    <>
      <div className={styles.formField}>
        <label htmlFor="image" className={styles.label}>
          Profile image
        </label>
        <div className={styles.inputWrapper}>
          <input type="file" {...(register ? register('image') : {})} name="image" id="image" />
        </div>
      </div>
      <ErrorMessage text={errorMessage} />
    </>
  );
}

export { ImageLoader };
