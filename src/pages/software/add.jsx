import { FormikContainer } from '../../components';
import { authenticate } from '../../helpers';
import { useSoftware } from '../../hooks';

export const getServerSideProps = (context) => authenticate(context);

/**
 * present the software form in create mode
 * @returns {React.jsx}
 */
export default function AddSoftware() {
  return <FormikContainer formTitle="Software" dataHook={useSoftware} isNew />;
}
