import { Theme } from '@radix-ui/themes';
import React from 'react';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Theme>{children}</Theme>
    </>
  );
}
