//formik <Field /> requires name prop
//MUI data-grid requires field prop

/**
 * fields: and array of:
 *  name: string
 *  label: string
 *  initialValue: a default value if new eg '' for string
 *  form: object
 *      control: string
 *      fullWidth: boolean false
 *      valueFormatter: function optional
 *      show: boolean true
 *      sortOrder: number 0
 *      type: string
 *  table: object
 *      renderCell: function optional reactnode
 *      show: boolean true
 *      sortOrder: number 0
 *      width: number optional 100
 *
 *
 * formOptions:
 *  'fieldName': matches one of the field names
 *      value: an array of options available for a select field
 *      options are in {value:'', label:''} format
 */

export class Fields {
  constructor(fields, formOptions) {
    this.tableColumns = [];
    this.formFields = [];

    for (let i = 0; i < fields.length; i++) {
      if (fields[i].table.show) {
        const tableColumn = {
          field: fields[i].name,
          headerName: fields[i].label,
          ...fields[i].table,
        };

        this.tableColumns.push(tableColumn);
      }

      if (fields[i].form.show) {
        const formField = {
          name: fields[i].name,
          label: fields[i].label,
          initialValue: fields[i].initialValue,
          ...fields[i].form,
        };

        this.formFields.push(formField);
      }
    }

    for (const key in formOptions) {
      if (Object.hasOwnProperty.call(formOptions, key)) {
        for (let i = 0; i < this.formFields.length; i++) {
          if (this.formFields[i].name === key) {
            this.formFields[i].options = formOptions[key];
            break;
          }
        }
      }
    }

    this.tableColumns.sort((a, b) => a.sortOrder - b.sortOrder);
    this.formFields.sort((a, b) => a.sortOrder - b.sortOrder);
  }
}
