'use client';

import { Button } from '@radix-ui/themes';
import copy from 'copy-to-clipboard';
import { FC } from 'react';

type Props = {
  text?: string;
};
const CopyButton: FC<Props> = ({ text }) => {
  const onClick = () => {
    if (text !== undefined && text !== null) {
      copy(text);
    }
  };
  return <Button onClick={onClick}>Copy</Button>;
};

export default CopyButton;
