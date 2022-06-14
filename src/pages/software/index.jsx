import { TableContainer } from '../../components';
import { DefaultButton } from '../../components/buttons/templates/DefaultButton';
import { authenticate } from '../../helpers';
import { useSoftware } from '../../hooks';

export const getServerSideProps = (context) => authenticate(context);

export const Software = () => (
  <TableContainer
    title="Software"
    dataHook={useSoftware}
    tableActions={
      <DefaultButton buttonURL="/software/add" buttonText="+ Add Software" />
    }
    sortOrder="asc"
    sortBy="title"
    height={80}
  />
);

export default Software;
