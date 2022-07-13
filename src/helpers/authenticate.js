import { getSession } from 'next-auth/react';

export const authenticate = async (context) => {
  const session = await getSession(context);
  console.log('session', { context, session });
  // if (!session) {
  //   return {
  //     redirect: {
  //       destination: '/api/auth/signin',
  //       permanent: false,
  //     },
  //   };
  // }

  return { props: {} };
};
