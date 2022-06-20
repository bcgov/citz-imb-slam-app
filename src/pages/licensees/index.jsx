import { TableContainer } from '../../components';
import { DefaultButton } from '../../components/buttons/templates/DefaultButton';
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
        <DefaultButton href="/licensees/add">+ Add Licensee</DefaultButton>
      }
      sortOrder="asc"
      sortBy="name"
      height={58}
    />
  );
}
