export const setInitialValues = (dataHookResponse, id) => {
  if (dataHookResponse.isLoading || dataHookResponse.isError) return {};

  const values = {};

  dataHookResponse.formFields.forEach((field) => {
    if (id && dataHookResponse.data.length) {
      return (values[field.name] = dataHookResponse.data[0][field.name]);
    } else {
      return (values[field.name] = field.initialValue);
    }
  });

  return values;
};
