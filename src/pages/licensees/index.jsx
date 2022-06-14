import { DefaultButton, TableContainer } from '../../components';
import { authenticate } from '../../helpers';
import { useLicensees } from '../../hooks';

export const getServerSideProps = (context) => authenticate(context);

/**
 * the Licensee Page
 * @returns {React.jsx}
 */
export default function Licensees() {
  return (
    <TableContainer
      title="Licensees"
      dataHook={useLicensees}
      route="licensees"
      tableActions={
        <DefaultButton buttonURL="/licensees/add" buttonText="+ Add Licensee" />
      }
      sortOrder="asc"
      sortBy="name"
      height={58}
    />
  );
}
