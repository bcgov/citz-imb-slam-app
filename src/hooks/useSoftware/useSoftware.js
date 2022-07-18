import { useMemo } from 'react';
import { useDBDataFactory } from '../useDBFactory/useDBData.Factory';
import { softwareFields } from './softwareFields';

export const useSoftware = (id) => {
  const formColumns = id ? 2 : 1;

  const softwareTable = useDBDataFactory('software', id, softwareFields);

  const data = useMemo(() => {
    if (
      softwareTable.isLoading ||
      softwareTable.isError ||
      softwareTable.data === undefined
    )
      return [];

    return softwareTable.data;
  }, [softwareTable.data, softwareTable.isError, softwareTable.isLoading]);

  return {
    ...softwareTable,
    data,
    formColumns,
  };
};
