'use client';

import { Icon, IconProps } from '@iconify/react';
import { FC } from 'react';

interface Props extends IconProps {}

const Iconify: FC<Props> = ({ icon, ...props }) => {
  return <Icon icon={icon} {...props} />;
};

export default Iconify;
