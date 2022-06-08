import InputUnstyled from '@mui/base/InputUnstyled';
import { styled } from '@mui/system';
import { Field } from 'formik';
import { useCallback } from 'react';
import { BaseControl } from '../common/BaseControl';

export const TextareaFormikControl = (props) => {
  const { name, label, required, disabled, ...remainingProps } = props;

  const InputStyle = useCallback(
    styled('textarea')(
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
			resize: none;
		}

		&:disabled:hover {
			border: 1px solid #ddd;
		}

	  `,
    ),
    [],
  );

  const StyledTextareaElement = styled('textarea')(
    ({ Theme }) => `
		width: 100%;
		max-width: 100%;
		border-radius: 3px;
		padding: 12px 12px;
	  `,
  );

  return (
    <Field name={name} key={name}>
      {({ field, form }) => (
        <BaseControl
          error={!!form.errors[field.name]}
          required={required}
          label={label}
          helperText={form.errors[field.name]}
          {...remainingProps}
        >
          <InputUnstyled
            {...field}
            disabled={disabled}
            components={{ Input: InputStyle, Textarea: StyledTextareaElement }}
            minRows={3}
          />
        </BaseControl>
      )}
    </Field>
  );
};
