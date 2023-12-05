import { ReactElement } from 'react';
import { UseFormRegister } from 'react-hook-form';

import { ErrorMessage } from '@/components/ui';
import { ReactHookFormData } from '@/pages/react-hook-form';
import styles from '@/styles/form.module.scss';

type Props = {
  register?: UseFormRegister<ReactHookFormData>;
  errorMessage?: string;
};

function AgreementCheckbox({ register, errorMessage = '' }: Props): ReactElement {
  return (
    <>
      <div className={styles.acceptField}>
        <input type="checkbox" {...(register ? register('agreement') : {})} name="agreement" id="t&c" />
        <label htmlFor="t&c">Accept terms and conditions</label>
      </div>
      <ErrorMessage text={errorMessage} />
    </>
  );
}

export { AgreementCheckbox };
