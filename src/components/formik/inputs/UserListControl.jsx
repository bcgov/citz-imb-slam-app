import InputUnstyled from '@mui/base/InputUnstyled';
import { Stack } from '@mui/material';
import { Field } from 'formik';
import styled from 'styled-components';
import { BaseControl } from '../common/BaseControl';
import { UserItemControl } from './UserItemControl';

const InputStyle = styled('input')(`
  display: block;
  border: 1px solid #ddd;
  border-radius: 3px;
  padding: 0.75rem;
  outline: none;
  background: #fff;
  margin-bottom: 0.35rem;
  font-size: .9rem;
  width: 100%;
  max-width: 100%;
  line-height: 1.5;
  font-family: -apple-system, BlinkMacSystemFont, 'Helvetica Neue',
  'Roboto', Roboto, Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji',
  'Segoe UI', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';

  &:hover {
  border: 1px solid #c4c4c4;
  }

  &:focus {
  border: 1px solid #0366ee;
  }

  &:disabled {
  background-color: #f2f2f2;
  cursor: not-allowed;
  color: #888;
  }
  &:disabled:hover {
  border: 1px solid #ddd;
  }
`);

const CustomFieldset = styled.fieldset`
  border: 1px solid #ddd;
  border-radius: 3px;
  padding: 0;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Helvetica Neue', 'Roboto',
    Roboto, Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI',
    'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
  font-size: 0.9rem;
  overflow: scroll;
  height: 408px;

  &:disabled {
    background-color: #f2f2f2;
    cursor: not-allowed;
    height: 408px;
    color: #888;
  }
`;

export const UserListControl = (props) => {
  const { name, label, required, disabled, licenseeList, ...remainingProps } =
    props;

  return (
    <Field name={name}>
      {({ field, form }) => {
        if (form.values[field.name] === undefined) return null;
        return (
          <BaseControl
            error={!!form.errors[field.name]}
            label={`${label} ${form.values[field.name].length} / ${
              form.values.quantity
            }`}
            {...remainingProps}
          >
            <CustomFieldset disabled>
              <Stack spacing={2}>
                {form.values[field.name].map((value) => (
                  <UserItemControl disabled={disabled} value={value} />
                ))}
              </Stack>
            </CustomFieldset>
          </BaseControl>
        );
      }}
    </Field>
  );
};
