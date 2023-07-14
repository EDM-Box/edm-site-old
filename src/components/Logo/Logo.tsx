import cn from "classnames";
import styles from "./Logo.module.scss";
import { LogoProps } from "./Logo.props";
import Link from "next/link";
import Logo2 from "@/assets/icons/logo2.svg";

export const Logo = ({ children, className, ...props }: LogoProps): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <Link className={cn(className, styles.logo)} href={"/"}>
        <Logo2 />
        <span className={styles.span1}>EDM</span>
        <span className={styles.span2}>Box</span>
      </Link>
    </div>
  );
};
