import { useRouter } from 'next/router';
import { FormikContainer } from '../../../components';
import { authenticate } from '../../../helpers';
import { useLicensees } from '../../../hooks';

export const getServerSideProps = (context) => authenticate(context);

/**
 * present the licensee form in read mode (initially) for a specific licensee
 * can be turned to edit mode
 * @returns {React.jsx}
 */
export default function Licencee() {
  const router = useRouter();

  const { id } = router.query;

  return (
    <FormikContainer
      formTitle="Licensee"
      dataHook={useLicensees}
      id={id}
      isNew={false}
    />
  );
}
