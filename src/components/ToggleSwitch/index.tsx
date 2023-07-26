import classNames from 'classnames';
import { useCallback } from 'react';
import type { FC, KeyboardEvent } from 'react';
import { KeyCode } from '../../common/enums/keycodes';

import { ReactComponent as CloseSVG } from '../../assets/icons/close.svg';
import { ReactComponent as DoneSVG } from '../../assets/icons/done.svg';

import styles from './styles.module.scss';

interface Props {
  value: boolean;
  onChange: () => void;
}

const ToggleSwitch: FC<Props> = ({ value, onChange }) => {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.code == KeyCode.SPACE || e.key == KeyCode.ENTER) {
        onChange();
      }
    },
    [onChange]
  );

  return (
    <div
      className={classNames(styles.root, {
        [styles.active]: value,
      })}
      onClick={() => onChange()}
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      <div className={styles.toggleSwitch}></div>
      <DoneSVG width={16} height={16} />
      <CloseSVG width={16} height={16} />
    </div>
  );
};
export default ToggleSwitch;
