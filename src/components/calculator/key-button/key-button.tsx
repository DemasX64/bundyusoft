/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { FC, ReactElement } from 'react';
import styles from './key-button.module.css';

interface KeyButtonProps {
  onClick: (value: string) => void
  value: string
  isActive?: boolean
}

const KeyButton: FC<KeyButtonProps> = (props): ReactElement => {
  const { onClick, value, isActive } = props;
  const { keyButton, active, inactive } = styles;
  return (
    <div className={`${keyButton} ${(isActive ?? false) ? active : inactive}`} onClick={() => onClick(value)}>{value}</div>
  );
};

KeyButton.defaultProps = {
  isActive: false,
};

export default KeyButton;
