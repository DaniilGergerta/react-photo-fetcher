import classNames from 'classnames';
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
    <button className={classNames(className, styles.btn)} {...rest}>
      {label}
    </button>
  );
};
export default Button;
