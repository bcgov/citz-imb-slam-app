import InputUnstyled from '@mui/base/InputUnstyled';
import { styled } from '@mui/system';
import { Field } from 'formik';
import { useCallback } from 'react';
import { BaseControl } from '../common/BaseControl';

export const InputFormikControl = (props) => {
  const {
    name,
    label,
    required,
    type = 'text',
    disabled,
    ...remainingProps
  } = props;

  const InputStyle = useCallback(
    styled('input')(
      ({ Theme }) => `
    display: block;
    border: 1px solid #ddd;
    border-radius: 3px;
    padding: 0.75rem;
    outline: none;
    background: #fff;
    margin-bottom: 0.25rem;
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
  `,
    ),
    [],
  );

  return (
    <Field name={name}>
      {({ field, form }) => {
        return (
          <BaseControl
            error={!!form.errors[field.name]}
            required={required}
            label={label}
            helperText={form.errors[field.name]}
            {...remainingProps}
          >
            <InputUnstyled
              {...field}
              type={type}
              disabled={disabled}
              components={{ Input: InputStyle }}
            />
          </BaseControl>
        );
      }}
    </Field>
  );
};
