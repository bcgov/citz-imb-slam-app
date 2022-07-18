import { useCallback, useMemo } from 'react';
import { useDBDataFactory } from '../useDBFactory/useDBData.Factory';
import { licenseeFields } from './licenseeFields';

/**
 * @description a hook for retrieving, caching, and manipulating data.  it extends react-query
 * @async
 * @category Hooks
 * @extends external:React-Query
 * @param {string} [licenseeId] optional uuid to recieve a specific licensee
 * @returns {Promise<object>} an object with members
 * @example
 * import { useLicensees } from 'hooks'
 *
 * const { data, isLoading, isError, create, update, delete } = useLicensees(id)
 */

export const useLicensees = (licenseeId) => {
  const formColumns = 1;

  const licenseeDBData = useDBDataFactory(
    'licensee',
    licenseeId,
    licenseeFields,
  );

  const {
    isError: licenseeIsError,
    isLoading: licenseeIsLoading,
    data: licenseeData,
    create: createLicensee,
    update: updateLicensee,
    remove: removeLicensee,
  } = licenseeDBData;

  const data = useMemo(() => {
    if (licenseeIsLoading || licenseeIsError || licenseeData === undefined)
      return [];

    return licenseeData;
  }, [licenseeData, licenseeIsError, licenseeIsLoading]);

  const {
    data: licensesData,
    create: createLicense,
    remove: removeLicense,
  } = useDBDataFactory('assigned-license');

  const create = useCallback(
    async (props) => {
      const { name = '', notes = '', software: softwareLicenses } = props;

      const licensesToAssign = softwareLicenses.map((software) => ({
        id: software,
      }));

      const licensee = await createLicensee({ name, notes });

      for (let i = 0; i < licensesToAssign.length; i++) {
        createLicense({
          softwareId: licensesToAssign[i].id,
          licenseeId: licensee.id,
        });
      }
    },
    [createLicense, createLicensee],
  );

  const update = useCallback(
    async (props) => {
      const { id, software, ...body } = props;

      await updateLicensee({ id, ...body });

      const currentLicenses = licensesData.filter(
        (license) => license.licenseeId === id,
      );

      for (let i = 0; i < currentLicenses.length; i++) {
        for (let j = 0; j < software.length; j++) {
          if (currentLicenses[i].softwareId === software[j].id) {
            currentLicenses[i].keep = true;
            software[j].keep = true;
            break;
          }
        }
      }

      const licensesToRemove = currentLicenses.filter(
        (license) => !license.keep,
      );
      const licensesToAdd = software.filter((license) => !license.keep);

      const awaitCompletion = [];
      for (let i = 0; i < licensesToRemove.length; i++) {
        awaitCompletion.push(removeLicense({ id: licensesToRemove[i].id }));
      }

      await Promise.all(awaitCompletion);

      for (let i = 0; i < licensesToAdd.length; i++) {
        createLicense({
          softwareId: licensesToAdd[i].id,
          licenseeId,
        });
      }
    },
    [createLicense, updateLicensee],
  );

  const remove = useCallback(
    async (props) => {
      const { id } = props;

      const assignedLicenses = licensesData
        .filter((item) => item.licenseeId === id)
        .map((item) => removeLicense({ id: item.id }));

      await Promise.all(assignedLicenses);

      await removeLicensee({ id });
    },
    [licensesData, removeLicensee],
  );

  return {
    ...licenseeDBData,
    data,
    formColumns,
    create,
    remove,
    update,
  };
};
