/** @format */
import { useRouter } from 'next/router';
import { useEffect } from 'react';
/**
 * the home page
 * @returns {React.jsx}
 */
export default function Home() {
  // TODO: Remove following block of code and related imports to restore Homepage when desired.
  const router = useRouter();

  useEffect(() => {
    router.push('/software');
  }, []);

  return null;
}
