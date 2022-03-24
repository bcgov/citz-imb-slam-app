import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Chip from '@mui/material/Chip';
import { Field } from 'formik';
import { useSoftware } from 'hooks';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
	PaperProps: {
		style: {
			maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
			width: 250,
		},
	},
};

const names = [
	'Oliver Hansen',
	'Van Henry',
	'April Tucker',
	'Ralph Hubbard',
	'Omar Alexander',
	'Carlos Abbott',
	'Miriam Wagner',
	'Bradley Wilkerson',
	'Virginia Andrews',
	'Kelly Snyder',
];

function getStyles(name, personName, theme) {
	return {
		fontWeight:
			personName.indexOf(name) === -1
				? theme.typography.fontWeightRegular
				: theme.typography.fontWeightMedium,
	};
}

export const MultipleSelectChip = (props) => {
	const { label, name, required = false, id, ...remainingProps } = props;
	const theme = useTheme();
	const [personName, setPersonName] = React.useState([]);

	const x = useSoftware();
	const { data = [] } = x;


	return (
		<Field name={name} id={id}>
			{(props) => {
				const { field, meta } = props;
				return (
					<div className='flex-large'>
						<label htmlFor={id}>
							{label}
							{required ? <span>*</span> : null}
						</label>
						<Select
							// {...field}
							// {...remainingProps}
							className={meta.touched && meta.error ? 'has-error' : ''}
							// labelId='demo-multiple-chip-label'
							// id='demo-multiple-chip'
							multiple
							value={field.value.map((value) => value.title)}
							onChange={(event) => {

								field.onChange(event.target.value)
							}}
							input={<OutlinedInput id='select-multiple-chip' label='Chip' />}
							renderValue={(selected) => {

								return (
									<Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
										{selected.map((value) => (
											<Chip key={value} label={value} />
										))}
									</Box>
								);
							}}
							MenuProps={MenuProps}>
							{data.map((software) => (
								<MenuItem
									key={software.id}
									value={software.id}
									// style={getStyles(software, personName, theme)}
								>
									{software.title}
								</MenuItem>
							))}
						</Select>
					</div>
				);
			}}
		</Field>
	);
};
