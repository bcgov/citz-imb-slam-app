import * as Yup from 'yup';
import { SoftwareCell } from '../../components/common/SoftwareCell';
import { useSoftware } from '../useSoftware/useSoftware';
import { LicenseDropdownControl } from '../../components/formik/inputs/LicenseDropdownControl';
import { ModifiedCell } from '../../components/common/ModifiedCell';

export const licenseeFields = [
  {
    name: 'id',
    label: 'ID',
    initialValue: 'temp',
    form: {
      control: 'hidden',
      show: true,
      sortOrder: 0,
      column: 0,
    },
    table: {
      show: false,
      sortOrder: 0,
      width: 300,
    },
  },
  {
    name: 'name',
    label: 'Licensee Name',
    initialValue: '',
    form: {
      control: 'text',
      fullWidth: true,
      show: true,
      sortOrder: 0,
      validation: Yup.string().required('Required'),
      column: 0,
    },
    table: {
      show: true,
      sortOrder: 1,
      width: 180,
    },
  },
  {
    name: 'software',
    label: 'Assigned Licenses',
    initialValue: [],
    setFormOptions: () => {
      const { data } = useSoftware();

      return data.map((option) => ({
        value: option.id,
        label: (
          <LicenseDropdownControl
            title={option.title}
            total={option.quantity}
            used={option.__licenseeConnection__.length}
          />
        ),
        ...option,
      }));
    },
    transformOnFetch: (row) =>
      row.__softwareConnection__.map((item) => item.__software__),
    form: {
      control: 'selectChip',
      fullWidth: true,
      show: true,
      sortOrder: 0,
      column: 0,
    },
    table: {
      flex: 1,
      renderCell: (params) => <SoftwareCell value={params.value} />,
      show: true,
      sortOrder: 2,
      width: 500,
    },
  },
  {
    name: 'notes',
    label: 'Notes',
    initialValue: '',
    form: {
      control: 'text',
      fullWidth: true,
      show: true,
      sortOrder: 3,
      column: 0,
    },
    table: {
      show: true,
      sortOrder: 3,
      width: 250,
    },
  },
  {
    name: 'modified',
    label: 'Modified',
    initialValue: '',
    form: {
      control: 'hidden',
      show: false,
      sortOrder: 0,
      column: 0,
    },
    table: {
      renderCell: (params) => <ModifiedCell value={params} />,
      show: true,
      sortOrder: 4,
      width: 150,
    },
  },
];
