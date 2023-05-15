import cn from 'classnames';
import styles from './Footer.module.scss';
import { FooterProps } from './Footer.props';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';

export const Footer = ({ children, className, ...props }: FooterProps): JSX.Element => {
  const { t } = useTranslation('footer');
  const date = new Date().getFullYear();

  return (
    <footer className={cn(className, styles.footer)} {...props}>
      <div className={styles.copyWrapper}>
        EDM-Box © 2021 - {date} {t('copyright')}
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
