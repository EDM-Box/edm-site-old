import cn from "classnames";
import styles from "./Slider.module.scss";
import { SliderProps } from "./Slider.props";

export const Slider = ({ children, className, ...props }: SliderProps): JSX.Element => {
  return (
    <div className={cn(className, styles.slider)} {...props}>
      Slider
      {children}
    </div>
  );
};
