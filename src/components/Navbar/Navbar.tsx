import cn from 'classnames';
import styles from './Navbar.module.scss';
import { NavbarProps } from './Navbar.props';
import Link from 'next/link';
import { useRouter } from 'next/router';
import config from '@src/config';

import { useTranslation } from 'next-i18next';

export const Navbar = ({ className, ...props }: NavbarProps): JSX.Element => {
  const { t } = useTranslation('menu');
  const router = useRouter();

  return (
    <nav className={cn(className, styles.navbar)} {...props} role="navigation">
      {config.menuRouts.map((item) => {
        if (!item?.subMenu)
          return (
            <Link
              className={cn(styles.menuLink, {
                [styles.active]: item.rout == router?.route,
              })}
              key={item.name}
              href={item.rout}
            >
              {t(item.name)}
            </Link>
          );
        return (
          <div key={item.name} className={styles.subMenu}>
            <Link
              className={cn(styles.menuLink, {
                [styles.active]: item.rout == router?.route,
              })}
              href={item.rout}
            >
              {t(item.name)}
            </Link>
            <ul>
              {item?.subMenu.map((subItem) => (
                <li key={subItem.name}>
                  <Link href={item.rout + subItem.rout}>{t(subItem.name)}</Link>
                </li>
              ))}
            </ul>
          </div>
        );
      })}

      {/* <Link className={styles.active} href={'/'}>
        Главная
      </Link>
      <Link href={'/'}>Ивенты</Link>
      <Link href={'/'}>Места</Link>
      <Link href={'/'}>Проекты</Link>
      <Link href={'/'}>Люди</Link>
      <div className={styles.subMenu}>
        <span>Blog</span>
        <ul>
          <li>
            <Link href={'/'}>Стили</Link>
          </li>
          <li>
            <Link href={'/'}>Интервью</Link>
          </li>
          <li>
            <Link href={'/'}>Подкасты</Link>
          </li>
          <li>
            <Link href={'/'}>Сеты</Link>
          </li>
        </ul>
      </div>
      <Link href={'/'}>EDM-Box</Link> */}
    </nav>
  );
};
