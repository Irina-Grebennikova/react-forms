import cn from 'classnames';
import { ReactElement, ReactNode } from 'react';

import styles from './button.module.scss';

type Props = {
  children: ReactNode | ReactElement;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  disabled?: boolean;
};

function Button({ children, type = 'button', className = '', disabled = false }: Props): ReactElement {
  return (
    <button className={cn(className, styles.button)} type={type} disabled={disabled}>
      {children}
    </button>
  );
}

export { Button };
