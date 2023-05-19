import styles from './Footer.module.scss';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';

export const Footer = (): JSX.Element => {
  const { t } = useTranslation('footer');
  const date = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.copyWrapper}>
        EDM-Box © 2021 - {date} <span>{t('copyright')}</span>
      </div>
      <div className={styles.linkWrapper}>
        <Link href="/user-agreement" target="_blank">
          {t('user-agreement')}
        </Link>
        <Link href="/privacy-policy" target="_blank">
          {t('privacy-policy')}
        </Link>
      </div>
    </footer>
  );
};
