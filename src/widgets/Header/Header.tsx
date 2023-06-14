import cn from 'classnames';
import styles from './Header.module.scss';
import { HeaderProps } from './Header.props';
import { Logo, Navbar, LocaleSwitcher } from '@/components';

export const Header = ({ children, ...props }: HeaderProps): JSX.Element => {
  return (
    <div className={cn(styles.header)} {...props}>
      <Logo />
      <Navbar />
      <div className={styles.sidebar}>
        <LocaleSwitcher />
      </div>
    </div>
  );
};
