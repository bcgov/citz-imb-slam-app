import { AvatarChip, LogoAvatar, DateCell, QuantityAssigned } from 'components';

export const softwareFields = [
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
        name: 'title',
        label: 'Title',
        initialValue: '',
        form: {
            control: 'text',
            fullWidth: true,
            show: true,
            sortOrder: 0,
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
        },
        table: {
            renderCell: (params) => <DateCell value={params.value} />,
            show: true,
            sortOrder: 4,
            valueFormatter: (params) =>
                new Date(params.value).toISOString().split('T')[0].replace(/ /g, '-'),
            width: 200,
        },
    },
    {
        name: 'quantity',
        label: 'Quantity',
        initialValue: 0,
        form: {
            control: 'number',
            show: true,
            sortOrder: 0,
        },
        table: {
            renderCell: (params) => (
                <QuantityAssigned
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
        },
        table: {
            show: true,
            sortOrder: 6,
            width: 300,
        },
    },
]
