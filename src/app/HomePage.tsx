import { Button } from '../components/base/button/button';
import { InputText } from '../components/base/form/inputText';

export interface IHomePageProps {}

export default function HomePage(props: IHomePageProps) {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="p-4 font-light">Home Page</h2>
      <Button _size="lg">Button Primary (L)</Button>
      <Button _size="sm">Button Primary (s)</Button>
      <Button _variant="secondary" _size="lg">
        Button Secondary(L)
      </Button>
      <Button _size="sm" _variant="secondary">
        Button Primary (s)
      </Button>
      <Button _size="lg" _variant="danger">
        Button Destruction
      </Button>
      <Button _size="sm" _variant="danger">
        Button Destruction
      </Button>
      <InputText className="" _variant="primary" placeholder=" Email" />
      <InputText _variant="error" placeholder="email" />
    </div>
  );
}
