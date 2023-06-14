import { DefaultLayout } from '@/layout/';
import styles from './index.module.scss';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

function Home() {
  const { t } = useTranslation();
  return (
    <main className={styles.main}>
      <h1>{t('HELLO_WORLD')}</h1>
    </main>
  );
}

export default DefaultLayout(Home, true);

export async function getStaticProps(context) {
  // extract the locale identifier from the URL
  const { locale } = context;

  return {
    props: {
      // pass the translation props to the page component
      ...(await serverSideTranslations(locale)),
    },
  };
}
