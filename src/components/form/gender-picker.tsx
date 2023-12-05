import cn from 'classnames';
import { ReactElement } from 'react';
import { UseFormRegister } from 'react-hook-form';

import { ErrorMessage } from '@/components/ui';
import { ReactHookFormData } from '@/pages/react-hook-form';
import styles from '@/styles/form.module.scss';

type Props = {
  register?: UseFormRegister<ReactHookFormData>;
  errorMessage?: string;
};

function GenderPicker({ register, errorMessage = '' }: Props): ReactElement {
  return (
    <>
      <div className={styles.formField}>
        <div className={styles.label}>Gender</div>
        <div className={cn(styles.inputWrapper, styles.genderFields)}>
          <input type="radio" {...(register ? register('gender') : {})} name="gender" id="male" value="male" />
          <label htmlFor="male">Male</label>
          <input type="radio" {...(register ? register('gender') : {})} name="gender" id="female" value="female" />
          <label htmlFor="female">Female</label>
        </div>
      </div>
      <ErrorMessage text={errorMessage} />
    </>
  );
}

export { GenderPicker };
