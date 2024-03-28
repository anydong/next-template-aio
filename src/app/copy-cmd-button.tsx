'use client';

import Iconify from '@/components/ui/Iconify';
import { Button, Dialog } from '@radix-ui/themes';
import copy from 'copy-to-clipboard';

export default function CopyCmdButton({ text }: { text?: string }) {
  const handleClose = () => {
    if (text !== undefined && text !== null) {
      copy(text);
    }
  };
  return (
    <Dialog.Close onClick={handleClose}>
      <Button>
        <Iconify icon="material-symbols:content-copy" />
        Copy
      </Button>
    </Dialog.Close>
  );
}
