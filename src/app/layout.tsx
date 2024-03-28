import { Providers } from '@/app/providers';
import type { Metadata } from 'next';
import { FC, ReactNode } from 'react';

import '@radix-ui/themes/styles.css';
import './globals.css';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

type Props = {
  children: ReactNode;
};

const RootLayout: FC<Readonly<Props>> = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
};

export default RootLayout;
