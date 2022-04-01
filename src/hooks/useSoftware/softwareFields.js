import clsx from 'clsx';
import { AvatarChip, DateCell, QuantityAssigned } from 'components';

export const softwareFields = () => {
    const fields = [
        {
            field: 'id',
            headerName: 'ID',
            width: 300,
            useInTable: false,
            useInForm: true,
            formSortOrder: 0,
            tableSortOrder: 0,
        },
        {
            field: 'title',
            headerName: 'Title',
            width: 250,
            renderCell: (params) => <AvatarChip title={params.value} />,
            useInTable: true,
            useInForm: true,
            formSortOrder: 0,
            tableSortOrder: 1,
        },
        {
            field: 'publisher',
            headerName: 'Publisher',
            width: 200,
            useInTable: true,
            useInForm: true,
            formSortOrder: 0,
            tableSortOrder: 3,
        },
        {
            field: 'renewal',
            headerName: 'Renewal Date',
            type: 'date',
            width: 200,
            valueFormatter: (params) =>
                new Date(params.value).toISOString().split('T')[0].replace(/ /g, '-'),
            // cellClassName: (params) =>
            //     clsx('cell-render', {
            //         warning:
            //             new Date(params.value) <
            //             new Date().setDate(new Date().getDate() + 90),
            //     }),
            renderCell: (params) => {
                console.log('params', params)
                return <DateCell value={params.value} />
            },
            useInTable: true,
            useInForm: true,
            formSortOrder: 0,
            tableSortOrder: 2,
        },
        {
            field: 'quantity',
            headerName: 'Quantity',
            width: 150,
            renderCell: (params) => (
                <QuantityAssigned
                    assigned={params.row.__licenseeConnection__.length}
                    available={params.value}
                />
            ),
            useInTable: true,
            useInForm: true,
            formSortOrder: 0,
            tableSortOrder: 5,
        },
        {
            field: 'administrator',
            headerName: 'Licence Administrator',
            width: 200,
            useInTable: true,
            useInForm: true,
            formSortOrder: 0,
            tableSortOrder: 4,
        },
        {
            field: 'notes',
            headerName: 'Notes',
            width: 300,
            useInTable: true,
            useInForm: true,
            formSortOrder: 0,
            tableSortOrder: 6,
        },
    ];

    const formFields = fields.filter(field => field.useInForm)
    const tableColumns = fields.filter(field => field.useInTable)

    formFields.sort((a, b) => a.formSortOrder - b.formSortOrder)
    tableColumns.sort((a, b) => a.tableSortOrder - b.tableSortOrder)

    return { formFields, tableColumns }
}
