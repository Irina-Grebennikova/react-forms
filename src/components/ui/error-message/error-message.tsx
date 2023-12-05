import cn from 'classnames';
import { ReactElement } from 'react';

import styles from './error-message.module.scss';

type Props = {
  text?: string;
  className?: string;
};

function ErrorMessage({ text = '', className = '' }: Props): ReactElement {
  const capitalizedText = text.charAt(0).toUpperCase() + text.slice(1);

  return <p className={cn(styles.message, className)}>{capitalizedText}</p>;
}

export { ErrorMessage };
