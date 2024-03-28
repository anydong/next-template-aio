'use client';

import Iconify from '@/components/ui/Iconify';
import { Button } from '@fluentui/react-components';

export default function Home() {
  return (
    <main>
      <div>
        <Button color={'primary'}>
          <Iconify icon="material-symbols:ads-click" /> Ha
        </Button>
      </div>
    </main>
  );
}
