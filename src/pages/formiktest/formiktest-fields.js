import * as Yup from 'yup'

export const fields = [
	{
		name: 'hidden',
		label: 'hidden Field',
		initialValue: 'x',
		control: 'hidden',
	},
	{
		name: 'text',
		label: 'Text Field',
		initialValue: 'x1',
		control: 'text',
		validation: Yup.string().required('Required'),
		fullWidth: true,
	},
	{
		name: 'text2',
		label: 'Text2 Field',
		initialValue: 'x2',
		control: 'text',
		validation: Yup.string(),
	},
	{
		name: 'text3',
		label: 'Text3 Field',
		initialValue: 'x3',
		control: 'text',
	},
	{
		name: 'number',
		label: 'Number Field',
		initialValue: 5,
		control: 'number',
	},
	{
		name: 'date',
		label: 'Date Field',
		initialValue: new Date().toISOString().split('T')[0],
		control: 'date',
	},
	{
		name: 'textarea',
		label: 'Textarea Field',
		initialValue: 'x4',
		control: 'textarea',
		validation: Yup.string().required('Required'),
		fullWidth: true,
	},
]