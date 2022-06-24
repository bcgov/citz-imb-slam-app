export const setInitialValues = (dataHookResponse, id) => {
  if (dataHookResponse.isLoading || dataHookResponse.isError) return {};
  const values = {};
  // console.log('id', id)
  dataHookResponse.formFields.forEach((field) => {
    // console.log('field', field)
    if (id) {
      values[field.name] = dataHookResponse.data[field.name];
    } else {
      values[field.name] = field.initialValue;
    }
  });
  // console.log('values', values)
  return values;
};
