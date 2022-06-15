import { FormikContainer } from '../../components';
import { authenticate } from '../../helpers';
import { useLicensees } from '../../hooks';

export const getServerSideProps = (context) => authenticate(context);

export default function AddLicensee() {
  return (
    <FormikContainer formTitle="Add Licensee" dataHook={useLicensees} isNew />
  );
}
