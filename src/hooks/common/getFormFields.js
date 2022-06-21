export const getFormFields = (fields) => {
  const formFields = fields
    .filter((field) => field.form.show)
    .map((field) => ({
      name: field.name,
      label: field.label,
      initalValue: field.initialValue,
      options: field.setFormOptions ? field.setFormOptions() : undefined,
      ...field.form,
    }));

  return formFields;
};
