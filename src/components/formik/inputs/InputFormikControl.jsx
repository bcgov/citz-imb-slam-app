import { Input } from '@mui/material';
import { Field } from 'formik';
import { BaseControl } from '../common/BaseControl';
import { ThemeProvider } from '@mui/material/styles';
import { Theme } from '../../style/Theme';
import { TextareaAutosize } from '@mui/material';
import InputUnstyled from '@mui/base/InputUnstyled';
import { styled } from '@mui/system';

export const InputFormikControl = (props) => {
  const {
    name,
    label,
    required,
    type = 'text',
    disabled,
    ...remainingProps
  } = props;

//   const InputStyle = styled('input')(
//     ({ theme }) => `
//     display: block;
//     border: 1px solid #ddd;
//     border-radius: 3px;
//     padding: 0.75rem;
//     outline: none;
//     background: transparent;
//     margin-bottom: 0.25rem;
//     font-size: .9rem;
//     width: 100%;
//     max-width: 100%;
//     line-height: 1.5;
  
// 	&:hover {
// 		border: 1px solid #c4c4c4;
// 	}
  
// 	&:focus {
// 		border: 1px solid #0366ee;
// 	}
//   `,
//   );

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
            {/* <ThemeProvider theme={Theme}> */}
              <InputUnstyled
                {...field}
                disableUnderline={true}
                type={type}
                disabled={disabled}
                components={{ Input: InputStyle }}
              />
            {/* </ThemeProvider> */}
          </BaseControl>
        );
      }}
    </Field>
  );
};
