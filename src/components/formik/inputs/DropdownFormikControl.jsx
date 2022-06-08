import { MenuItem } from '@mui/material';
import { Field } from 'formik';
import { BaseControl } from '../common/BaseControl';
import { Select } from 'react-select';
import styled from 'styled-components';

export const SelectFormikControl = (props) => {
  const {
    name,
    label,
    required,
    type = 'text',
    disabled,
    options,
    ...remainingProps
  } = props;

  const CustomDropdown = styled.Select`
    border: 1px solid #ddd;
    border-radius: 3px;
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Helvetica Neue', 'Roboto',
      Roboto, Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI',
      'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
    font-size: 0.9rem;
    overflow: scroll;
    height: 355px;

    &:disabled {
      background-color: #f2f2f2;
      cursor: not-allowed;
      height: 408px;
      color: #888;
    }
  `;
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
            {options.map((option, key) => (
              <MenuItem key={key} value={option}>
                {option}
              </MenuItem>
            ))}
          </Select>
        </BaseControl>
      )}
    </Field>
  );
};
