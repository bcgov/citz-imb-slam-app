// formik <Field /> requires name prop
// MUI data-grid requires field prop

/**
 * fields: an array of:
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
 *  transformOnFetch: optional function that accepts the fetched value and returns a value
 *  transformOnSave: optional function that accepts the value and returns a value to be sent to the backend
 * formOptions:
 *  'fieldName': matches one of the field names
 *      value: an array of options available for a select field
 *      options are in {value:'', label:''} format
 */

export class Fields {
  constructor(fields = [], formOptions = {}) {
    this.tableColumns = [];
    this.formFields = [];

    this.transformOnFetch = (data) => {
      console.log('data', { data, isArray: Array.isArray(data) })

      if (Array.isArray(data)) {
        // TODO
      } else {
        console.log('fields', fields)
        const newData = { ...data }
        for (let i = 0; i < fields.length; i++) {
          if (fields[i].transformOnFetch) {
            console.log("to transform", fields[i])
            newData[fields[i].name] = fields[i].transformOnFetch(newData)
          }
        }
        console.log('x', { fields, newData })

        return newData
      }


      if (fields.length) {
        const fieldsToTransform = fields.map((field) => {
          console.log('field>', field)
          if (field.transformOnFetch) {
            console.log('field>>', field)
          }
        })

        // for (let i = 0; i < fieldsToTransform.length; i++) {
        //   for (let j = 0; j < data.length; j++) {
        //     data[j][fieldsToTransform[i].name] = fieldsToTransform[i].transformOnFetch(data[j]);
        //   }
        // }
      }
      return data;
    };

    this.transformOnSave = (body, callback) => {
      const transformedBody = {};

      for (let i = 0; i < fields.length; i++) {
        transformedBody[fields[i].name] = body[fields[i].name];

        if (fields[i].transformOnSave)
          transformedBody[fields[i].name] = fields[i].transformOnSave(
            body[fields[i].name],
          );
      }

      return callback(transformedBody);
    };

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

        if (fields[i].setFormOptions)
          formField.options = fields[i].setFormOptions();

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
