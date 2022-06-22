import { getFormFields } from './getFormFields';
import { getTableColumns } from './getTableColumns';
import { transformOnFetch } from './transformOnFetch';
import { transformOnSave } from './transformOnSave';
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
  constructor(fields = []) {
    this.tableColumns = getTableColumns(fields);
    this.formFields = getFormFields(fields);

    this.transformOnFetch = (data) => transformOnFetch(data, fields);

    this.transformOnSave = (data, callback) => transformOnSave(data, callback, fields);

    this.tableColumns.sort((a, b) => a.sortOrder - b.sortOrder);
    this.formFields.sort((a, b) => a.sortOrder - b.sortOrder);
  }
}
