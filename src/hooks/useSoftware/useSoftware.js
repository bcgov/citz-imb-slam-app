import { Fields } from 'hooks/common/Fields.class';
import { useMemo } from 'react';
import { useDBTableFactory } from '../common/useDBTable.Factory';
import { softwareFields } from './softwareFields';

export const useSoftware = (id) => {
  let formColumns = 1;

  if (id) formColumns = 2;

  const softwareTable = useDBTableFactory('software', id);

  const data = useMemo(() => {
    if (
      softwareTable.isLoading ||
      softwareTable.isError ||
      softwareTable.data === undefined
    )
      return [];

    return softwareTable.data;
  }, [softwareTable.data, softwareTable.isError, softwareTable.isLoading]);

  const { tableColumns, formFields } = new Fields(softwareFields);

  const create = (body) => {
    const renewal = body.renewal === '' ? null : body.renewal;
    return softwareTable.create({ ...body, renewal });
  };

  return {
    ...softwareTable,
    data,
    create,
    tableColumns,
    formFields,
    formColumns,
  };
};
