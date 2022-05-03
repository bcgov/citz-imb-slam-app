import { getSession } from 'next-auth/react';

export const authenticate = async (context) => {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: '/api/auth/signin',
        permanent: false,
      },
    };
  }

  return { props: {} };
};
