import cn from "classnames";
import styles from "./LocaleSwitcher.module.scss";
import { LocaleSwitcherProps } from "./LocaleSwitcher.props";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useRouter } from "next/router";

export const LocaleSwitcher = ({ children, className, ...props }: LocaleSwitcherProps): JSX.Element => {
  const useRouters = useRouter();

  const redirectedPathName = (locale: string): string => {
    // if (useRouters.pathname === '/' && locale === useRouters.defaultLocale) return useRouters.pathname;

    // if (useRouters.pathname === '/' && locale !== useRouters.defaultLocale) return '/' + locale;

    return useRouters.pathname;
  };
  // console.log('Console: ', useRouter());
  // console.log('Console: ', useRouters.locales);

  return (
    <div className={cn(className, styles.locale)} {...props}>
      <ul>
        {useRouters.locales?.map((locale) => {
          return (
            <li key={locale}>
              <Link href={redirectedPathName(locale)} locale={locale}>
                {locale}
              </Link>
              {/* <Link href={'/'} locale={locale}>
                {locale}
              </Link> */}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
