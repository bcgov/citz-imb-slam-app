import { AvatarChip, SoftwareCell } from 'components';
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
        },
        table: {
            show: true,
            sortOrder: 1,
        },
    },
    {
        name: 'software',
        label: 'Assigned Licenses',
        initialValue: [],
        form: {
            control: 'selectChip',
            fullWidth: true,
            show: true,
            sortOrder: 0,
        },
        table: {
            flex: 1,
            renderCell: (params) => <SoftwareCell value={params.value} />,
            show: true,
            sortOrder: 2,
        },
    },
]
