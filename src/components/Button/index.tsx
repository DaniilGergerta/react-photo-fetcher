import classNames from 'classnames';
import { ComponentProps, FC } from 'react';
import styles from './styles.module.scss';

interface Props {
  label: string;
}

const Button: FC<ComponentProps<'button'> & Props> = ({
  label,
  className,
  ...rest
}) => {
  return (
    <button {...rest} className={classNames(className, styles.btn)}>
      {label}
    </button>
  );
};
export default Button;
