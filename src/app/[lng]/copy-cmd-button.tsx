'use client';

import Iconify from '@/components/ui/Iconify';
import { useTranslation } from '@/i18n/client';
import { Button, Dialog } from '@radix-ui/themes';
import copy from 'copy-to-clipboard';

export default function CopyCmdButton({ text }: { text?: string }) {

  const { t } = useTranslation('zh');
  const handleClose = () => {
    if (text !== undefined && text !== null) {
      copy(text);
    }
  };
  return (
    <Dialog.Close onClick={handleClose}>
      <Button>
        <Iconify icon="material-symbols:content-copy" />
        {t('copy')}
      </Button>
    </Dialog.Close>
  );
}
