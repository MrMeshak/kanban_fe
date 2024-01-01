import { useQuery } from '@tanstack/react-query';
import { Button } from '../components/base/button/button';
import { FormInputText } from '../components/base/form/formInputText';
import { httpClient } from '../axios';
import { AxiosResponse } from 'axios';

export interface IUser {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
}

export interface IHomePageProps {}

export default function HomePage(props: IHomePageProps) {
  const meQuery = useQuery({
    queryKey: ['me'],
    queryFn: async () => {
      return (await httpClient.get('/auth/me')) as AxiosResponse<IUser>;
    },
  });

  return (
    <div className="flex flex-col gap-4">
      <h2 className="p-4 font-light">Home Page</h2>
      {meQuery.data?.data && (
        <p>
          {meQuery.data.data.firstName} {meQuery.data.data.lastName}
        </p>
      )}
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
      <FormInputText className="" _variant="primary" placeholder=" Email" />
      <FormInputText _variant="error" placeholder="email" />
    </div>
  );
}
