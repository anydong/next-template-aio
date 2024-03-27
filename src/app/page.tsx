import Iconify from '@/components/ui/Iconify';
import { Button, Card, CardBody, CardHeader } from '@nextui-org/react';

export default function Home() {
  return (
    <main>
      <Card>
        <CardHeader>Hello World!</CardHeader>
        <CardBody>
          <div>
            <Button color={'primary'}>
              <Iconify icon="material-symbols:ads-click" /> Ha
            </Button>
          </div>
        </CardBody>
      </Card>
    </main>
  );
}
