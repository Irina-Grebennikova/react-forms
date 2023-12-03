import { ReactElement } from 'react';

import styles from './form-data-tile.module.scss';

function FormDataTile({ data }: { data: Record<string, unknown> }): ReactElement {
  const formatedData = Object.fromEntries(Object.entries(data).map(([key, value]) => [key, String(value)]));

  return (
    <div className={styles.tile}>
      <img className={styles.image} src={formatedData.image} alt="" width={360} height={200} />
      <h3>
        <span className={styles.label}>Name: </span>
        {formatedData.name}
      </h3>
      <p>
        <span className={styles.label}>Age: </span>
        {formatedData.age}
      </p>
      <p>
        <span className={styles.label}>Gender: </span>
        {formatedData.gender}
      </p>
      <p>
        <span className={styles.label}>Country: </span>
        {formatedData.country}
      </p>
      <p>
        <span className={styles.label}>Email: </span>
        {formatedData.email}
      </p>
      <p>
        <span className={styles.label}>Password: </span>
        {formatedData.password}
      </p>
    </div>
  );
}

export { FormDataTile };
