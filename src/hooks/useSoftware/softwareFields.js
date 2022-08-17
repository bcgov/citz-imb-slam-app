import * as Yup from 'yup';
import { DateCell } from '../../components/common/DateCell';
import { LogoAvatar } from '../../components/common/LogoAvatar';
import { QuantityAssigned } from '../../components/common/QuantityAssigned';

export const softwareFields = [
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
    name: 'title',
    label: 'Title',
    initialValue: '',
    form: {
      control: 'text',
      fullWidth: true,
      validation: Yup.string().required('Required'),
      show: true,
      sortOrder: 0,
      column: 0,
    },
    table: {
      renderCell: (params) => <LogoAvatar title={params.value} />,
      show: true,
      sortOrder: 1,
      width: 250,
    },
  },
  {
    name: 'publisher',
    label: 'Publisher',
    initialValue: '',
    form: {
      control: 'text',
      show: true,
      sortOrder: 0,
      column: 0,
    },
    table: {
      show: true,
      sortOrder: 2,
      width: 200,
    },
  },
  {
    name: 'renewal',
    label: 'Renewal Date',
    initialValue: '',
    form: {
      control: 'date',
      show: true,
      sortOrder: 0,
      type: 'date',
      column: 0,
    },
    table: {
      renderCell: (params) => <DateCell value={params.value} />,
      show: true,
      sortOrder: 4,
      width: 200,
    },
    transformOnSave: (value) => {
      if (value === '') return null;

      return value;
    },
  },
  {
    name: 'quantity',
    label: 'Quantity',
    initialValue: 0,
    form: {
      control: 'number',
      show: true,
      validation: Yup.number().min(0),
      sortOrder: 0,
      column: 0,
    },
    table: {
      renderCell: (params) => (
        <QuantityAssigned
          // eslint-disable-next-line no-underscore-dangle
          assigned={params.row.__licenseeConnection__.length}
          available={params.value}
        />
      ),
      show: true,
      sortOrder: 3,
      width: 150,
    },
  },
  {
    name: 'administrator',
    label: 'Licence Administrator',
    initialValue: '',
    form: {
      control: 'text',
      show: true,
      sortOrder: 0,
      column: 0,
    },
    table: {
      show: true,
      sortOrder: 5,
      width: 200,
    },
  },
  {
    name: 'notes',
    label: 'Notes',
    initialValue: '',
    form: {
      control: 'textarea',
      fullWidth: true,
      show: true,
      sortOrder: 0,
      column: 0,
    },
    table: {
      show: true,
      sortOrder: 6,
      width: 300,
    },
  },
  {
    name: '__licenseeConnection__',
    label: 'Assigned Licensees',
    initialValue: [],
    form: {
      control: 'userlist',
      fullWidth: true,
      show: true,
      sortOrder: 0,
      column: 1,
    },
    table: {
      show: false,
    },
  },
];
