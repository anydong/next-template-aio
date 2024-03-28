import CopyCmdButton from '@/app/copy-cmd-button';
import Iconify from '@/components/ui/Iconify';
import { Button, Code, Dialog, Flex } from '@radix-ui/themes';

export default function Home() {
  const createCmd = 'npx create-next-app@latest --example https://github.com/anydong/next-template-aio my-app-next';
  return (
    <main>
      <div className="flex h-screen items-center justify-center">
        <Dialog.Root>
          <Dialog.Trigger>
            <Button>
              <Iconify icon="material-symbols:ads-click" /> Ha
            </Button>
          </Dialog.Trigger>
          <Dialog.Content>
            <Dialog.Title>Next Template AIO</Dialog.Title>
            <Dialog.Description>基于此模版创建项目</Dialog.Description>
            <Code>{createCmd}</Code>
            <Flex gap="3" mt="4" justify="end">
              <Dialog.Close>
                <Button variant="soft" color="gray">
                  Close
                </Button>
              </Dialog.Close>
              <CopyCmdButton text={createCmd} />
            </Flex>
          </Dialog.Content>
        </Dialog.Root>
      </div>
    </main>
  );
}
