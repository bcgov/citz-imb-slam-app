export const getFormFields = (fields) => {
  const formFields = fields
    .filter((field) => field.form.show)
    .map((field) => ({
      name: field.name,
      label: field.label,
      options: field.setFormOptions ? field.setFormOptions() : undefined,
      ...field.form,
    }));

  return formFields;
};
