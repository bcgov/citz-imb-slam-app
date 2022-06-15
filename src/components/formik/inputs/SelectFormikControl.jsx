import { MenuItem, Select } from '@mui/material';
import { Field } from 'formik';
import { BaseControl } from '../common/BaseControl';

export const SelectFormikControl = (props) => {
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
          <Select sx={{ marginTop: 2 }} {...field} disabled={disabled}>
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
