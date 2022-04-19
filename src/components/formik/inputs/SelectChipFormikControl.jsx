import { Field } from 'formik';
import Select from 'react-select';
import { BaseControl } from '../common/BaseControl';

export const SelectChipFormikControl = (props) => {
	const { name, label, required, type, disabled, options, ...remainingProps } =
		props;

	return (
		<Field name={name}>
			{(props) => {
				const { field, form, meta } = props;
				return (
					<BaseControl
						error={!!form.errors[field.name]}
						required={required}
						label={label}
						helperText={form.errors[field.name]}
						{...remainingProps}>
						<Select
							onChange={(values) =>
								form.setFieldValue(
									field.name,
									values.map((value) => value.value),
								)
							}
							className={disabled ? "readOnly" : "select"}
							onBlur={field.onBlur}
							isDisabled={disabled}
							isMulti={true}
							closeMenuOnSelect={false}
							value={field.value.map((item) =>
								options.find((option) => option.value === item),
							)}
							options={options}
						/>
					</BaseControl>
				);
			}}
		</Field>
	);
};
