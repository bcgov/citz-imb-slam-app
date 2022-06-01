import { TableContainer } from 'components';
import { authenticate } from 'helpers';
import { useLicensees } from 'hooks';
import { useRouter } from 'next/router';
import { DefaultButton } from '../../components/buttons/templates/DefaultButton';

export const getServerSideProps = (context) => {
  return authenticate(context);
};

/**
 * the Licensee Page
 * @returns {React.jsx}
 */
export default function Licensees() {
  const router = useRouter();

  const tableActions = (
    <DefaultButton buttonURL="/licensees/add" buttonText="+ Add Licensee" />
  );

  return (
    <TableContainer
      title={'Licensees'}
      dataHook={useLicensees}
      route={'licensees'}
      tableActions={tableActions}
      sortOrder={'asc'}
      sortBy={'name'}
      height={58}
    />
  );
}
