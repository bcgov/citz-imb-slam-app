import * as Yup from 'yup';

export const useFakeDataHook = () => {
	return {
		create: (body) => {
			console.log('create', body);
		},
		update: (body) => {
			console.log('update', body);
		},
		remove: (body) => {
			console.log('remove', body);
		},
		formFields: [
			{
				name: 'id',
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
				name: 'select',
				label: 'Select Field',
				control: 'select',
				initialValue: "one",
				options: ["one", "two", "three"]
			},
			{
				name: 'selectchip',
				label: 'Select Chips',
				control: 'selectChip',
				initialValue: ['1'],
				options: [{ value: '1', label: "one" }, { value: '2', label: "two" }, { value: '3', label: "three" }]
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
	}
}