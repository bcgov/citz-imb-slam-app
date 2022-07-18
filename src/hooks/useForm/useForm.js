import { useMemo } from 'react';
import { setFormFields } from './setFormFields';
import { setInitialValues } from './setInitialValues';
import { setSchema } from './setSchema';

export const useForm = (dataHook, id) => {
  const dataHookResponse = dataHook(id);

  const initialValues = useMemo(
    () => setInitialValues(dataHookResponse, id),
    [dataHookResponse, id],
  );

  const validationSchema = setSchema(dataHookResponse);

  const formFields = setFormFields(dataHookResponse);

  return { ...dataHookResponse, formFields, initialValues, validationSchema };
};
