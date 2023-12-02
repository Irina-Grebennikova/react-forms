import cn from 'classnames';
import { ReactElement, ReactNode } from 'react';

import styles from './button.module.scss';

type Props = {
  children: ReactNode | ReactElement;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
};

function Button({ children, type = 'button', className = '' }: Props): ReactElement {
  return (
    <button className={cn(className, styles.button)} type={type}>
      {children}
    </button>
  );
}

export { Button };
