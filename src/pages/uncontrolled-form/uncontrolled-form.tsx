import cn from 'classnames';
import { ReactElement } from 'react';

import { Button } from '@/components/button';

import styles from './uncontrolled-form.module.scss';

function UncontrolledForm(): ReactElement {
  return (
    <main className={styles.page}>
      <h1 className={styles.title}>
        <span>Unconrolled Form</span>
      </h1>
      <form className="form">
        <div className={styles.formField}>
          <label htmlFor="name" className={styles.label}>
            Name
          </label>
          <div className={styles.inputWrapper}>
            <input
              className={'input ' + styles.inputField}
              type="text"
              name="name"
              id="name"
              autoComplete="name"
              placeholder="Your name"
            />
          </div>
        </div>
        <div className={styles.formField}>
          <label htmlFor="age" className={styles.label}>
            Age
          </label>
          <div className={styles.inputWrapper}>
            <input className={'input ' + styles.inputField} type="number" name="age" id="age" placeholder="Your age" />
          </div>
        </div>
        <div className={styles.formField}>
          <label htmlFor="email" className={styles.label}>
            Email
          </label>
          <div className={styles.inputWrapper}>
            <input
              className={cn('input', styles.inputField)}
              type="text"
              name="email"
              id="email"
              autoComplete="email"
              placeholder="Your email"
            />
          </div>
        </div>
        <div className={styles.formField}>
          <label htmlFor="password" className={styles.label}>
            Password
          </label>
          <div className={styles.inputWrapper}>
            <input
              className={'input ' + styles.inputField}
              type="password"
              name="password"
              id="password"
              autoComplete="password"
              placeholder="Type a strong password"
            />
          </div>
        </div>
        <div className={styles.formField}>
          <label htmlFor="confirm-password" className={styles.label}>
            Confirm password
          </label>
          <div className={styles.inputWrapper}>
            <input
              className={'input ' + styles.inputField}
              type="password"
              name="confirm-password"
              id="confirm-password"
              autoComplete="password"
              placeholder="Repeat password"
            />
          </div>
        </div>
        <div className={styles.formField}>
          <div className={styles.label}>Gender</div>
          <div className={cn(styles.inputWrapper, styles.genderFields)}>
            <input type="radio" name="gender" id="male" value="male" />
            <label htmlFor="male">Male</label>
            <input type="radio" name="gender" id="female" value="female" />
            <label htmlFor="female">Female</label>
          </div>
        </div>
        <div className={styles.formField}>
          <label htmlFor="image" className={styles.label}>
            Profile image
          </label>
          <div className={styles.inputWrapper}>
            <input type="file" name="image" id="image" />
          </div>
        </div>
        <div className={styles.acceptField}>
          <input type="checkbox" name="t&c" id="t&c" />
          <label htmlFor="t&c">Accept terms and conditions</label>
        </div>
        <div className={styles.submit}>
          <Button type="submit">Submit</Button>
        </div>
      </form>
    </main>
  );
}

export { UncontrolledForm };
