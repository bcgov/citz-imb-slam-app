export const setInitialValues = (dataHookResponse, id) => {
  if (dataHookResponse.isLoading || dataHookResponse.isError) return {};
  const values = {};

  dataHookResponse.formFields.forEach((field) => {
    if (id) {
      values[field.name] = dataHookResponse.data[field.name];
    } else {
      values[field.name] = field.initialValue;
    }
  });

  return values;
};
