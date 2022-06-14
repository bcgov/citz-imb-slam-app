import { MenuItem } from '@mui/material';
import { Field } from 'formik';
import { Select } from 'react-select';
import { BaseControl } from '../common/BaseControl';

export const DropdownFormikControl = (props) => {
  const { name, label, required, disabled, options, ...remainingProps } = props;

  return (
    <Field name={name}>
      {({ field, form }) => (
        <BaseControl
          error={!!form.errors[field.name]}
          required={required}
          label={label}
          helperText={form.errors[field.name]}
          {...remainingProps}
        >
          <Select {...field} disabled={disabled}>
            {options.map((option) => (
              <MenuItem
                // key={key}
                value={option}
              >
                {option}
              </MenuItem>
            ))}
          </Select>
        </BaseControl>
      )}
    </Field>
  );
};
