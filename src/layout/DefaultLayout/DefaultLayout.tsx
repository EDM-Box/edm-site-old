import styles from './DefaultLayout.module.scss';
import { DefaultLayoutProps } from './DefaultLayout.props';
import { FunctionComponent } from 'react';

const Layout = ({ children }: DefaultLayoutProps): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <main className={styles.main}>{children}</main>
    </div>
  );
};

export const DefaultLayout = <T extends Record<string, unknown>>(Component: FunctionComponent<T>) => {
  return function withLayoutComponent(props: T): JSX.Element {
    return (
      <Layout>
        <Component {...props} />
      </Layout>
    );
  };
};
