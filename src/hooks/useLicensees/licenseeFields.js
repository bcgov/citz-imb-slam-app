import { AvatarChip } from 'components';
import * as Yup from 'yup';

export const licenseeFields = (initialValues = {}, softwareTable) => {
    const { id, name, software } = initialValues


    const licenseOptions = softwareTable.data.map(({ id, title }) => {
        const option = {}
        option.value = id
        option.label = title
        return option
    })

    const fields = [
        {
            field: 'id',
            name: 'id',
            label: 'hidden Field',
            initialValue: id || 'temp',
            control: 'hidden',
            useInTable: false,
            useInForm: true,
            formSortOrder: 0,
            tableSortOrder: 0,
        },
        {
            field: 'name',
            name: 'name',
            label: 'Licensee Name',
            initialValue: name || '',
            control: 'text',
            validation: Yup.string().required('Required'),
            fullWidth: true,
            useInTable: true,
            useInForm: true,
            formSortOrder: 0,
            tableSortOrder: 1,
        },
        {
            field: 'software',
            name: 'software',
            label: 'Assigned Licenses',
            control: 'selectChip',
            initialValue: software || [],
            flex: 1,
            renderCell: (params) => {
                const values = params.value.map(item => licenseOptions.find(option => option.value === item))
                return <>
                    {values.map(item => <AvatarChip key={item.value} title={item.label} />)}
                </>
            },
            options: licenseOptions,
            fullWidth: true,
            useInTable: true,
            useInForm: true,
            formSortOrder: 0,
            tableSortOrder: 2,

        },
    ]

    const formFields = fields.filter(field => field.useInForm)
    const tableColumns = fields.filter(field => field.useInTable)

    formFields.sort((a, b) => a.formSortOrder - b.formSortOrder)
    tableColumns.sort((a, b) => a.tableSortOrder - b.tableSortOrder)

    return { formFields, tableColumns }
}
