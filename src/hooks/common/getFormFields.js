export const getFormFields = (fields) => {
  const formFields = fields
    .filter((field) => field.form.show)
    .map((field) => ({
      name: field.name,
      label: field.label,
      initalValue: field.initialValue,
      ...field.form,
    }));
  //   if (fields[i].form.show) {
  //     const formField = {
  //       name: fields[i].name,
  //       label: fields[i].label,
  //       initialValue: fields[i].initialValue,
  //       ...fields[i].form,
  //     };

  //     if (fields[i].setFormOptions)
  //       formField.options = fields[i].setFormOptions();

  //     this.formFields.push(formField);
  //   }

  // console.log('formFields', formFields);
  return formFields;
};
