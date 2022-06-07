import { TextareaAutosize } from '@mui/material';
import { Field } from 'formik';
import { BaseControl } from '../common/BaseControl';

export const TextareaFormikControl = (props) => {
  const { name, label, required, disabled, ...remainingProps } = props;

  return (
    <Field name={name} key={name}>
		  {({ field, form }) => {
        return (
          <BaseControl
            error={!!form.errors[field.name]}
            required={required}
            label={label}
            helperText={form.errors[field.name]}
            {...remainingProps}
          >
            <TextareaAutosize {...field} disabled={disabled} />
          </BaseControl>
        );
      }}
    </Field>
  );
};
