import cn from 'classnames';
import styles from './Sidebar.module.scss';
import { SidebarProps } from './Sidebar.props';

export const Sidebar = ({ children, className, ...props }: SidebarProps): JSX.Element => {
  return (
    <div className={cn(className, styles.sidebar)} {...props}>
      Sidebar
      {children}
    </div>
  );
};
