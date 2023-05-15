import { Header, Footer, Slider, Sidebar } from '@/widgets';
import styles from './DefaultLayout.module.scss';
import { DefaultLayoutProps } from './DefaultLayout.props';
import { FunctionComponent } from 'react';

const Layout = ({ children, showSlider }: DefaultLayoutProps): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.headerWrapper}>
        <Header />
      </div>
      <div className={styles.mainWrapper}>
        {showSlider && (
          <div className={styles.sliderWrapper}>
            <Slider />
          </div>
        )}
        <div className={styles.mainContentWrapper}>{children}</div>
        <div className={styles.sidebarWrapper}>
          <Sidebar />
        </div>
      </div>
      <div className={styles.footerWrapper}>
        <Footer />
      </div>
    </div>
  );
};

export const DefaultLayout = <T extends Record<string, unknown>>(
  Component: FunctionComponent<T>,
  showSlider?: boolean
) => {
  return function withLayoutComponent(componentProps: T): JSX.Element {
    return (
      <Layout showSlider={showSlider}>
        <Component {...componentProps} />
      </Layout>
    );
  };
};
