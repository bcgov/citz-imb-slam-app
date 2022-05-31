import { AvatarChip, SoftwareCell } from 'components';
import { useSoftware } from 'hooks';
import * as Yup from 'yup';

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
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const { data } = useSoftware()
      return data.map(({ id, title }) => { return { value: id, label: title } })
    },
    transformOnFetch: (value) => value.__softwareConnection__.map(item => item.__software__)
    ,
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
      show: true,
      sortOrder: 4,
      width: 150,
    },
  },
];
