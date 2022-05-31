import { TableContainer } from 'components';
import { authenticate } from 'helpers';
import { useSoftware } from 'hooks';
import { useRouter } from 'next/router';
import { DefaultButton } from '../../components/buttons/templates/DefaultButton';

export const getServerSideProps = (context) => {
  return authenticate(context);
};

export const Software = () => {
  const router = useRouter();

  const tableActions = (
    <DefaultButton buttonURL="/software/add" buttonText="+ Add Software" />
  );

  return (
    <TableContainer
      title={'Software'}
      dataHook={useSoftware}
      tableActions={tableActions}
      sortOrder={'asc'}
      sortBy={'title'}
      height={80}
    />
  );
};

export default Software;
