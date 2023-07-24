import { ComponentProps, FC } from 'react';
import styles from './styles.module.scss';

interface Props {
  label: string;
}

const Button: FC<ComponentProps<'button'> & Props> = ({
  label,
  className,
  onClick,
  ...rest
}) => {
  return (
    <button className={styles.btn} onClick={onClick} {...rest}>
      {label}
    </button>
  );
};
export default Button;
