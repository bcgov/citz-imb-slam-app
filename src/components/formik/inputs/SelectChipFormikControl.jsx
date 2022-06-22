import { Field } from 'formik';
import Select from 'react-select';
import { BaseControl } from '../common/BaseControl';

export const SelectChipFormikControl = (props) => {
  const {
    name,
    label,
    required,
    type,
    disabled,
    options = [],
    ...remainingProps
  } = props;

  return (
    <Field name={name}>
      {(fieldProps) => {
        const { field, form } = fieldProps;
        return (
          <BaseControl
            error={!!form.errors[field.name]}
            required={required}
            label={label}
            helperText={form.errors[field.name]}
            {...remainingProps}
          >
            <Select
              instanceId="select-chip-control"
              onChange={(values) =>
                form.setFieldValue(
                  field.name,
                  values.map((value) => value),
                )
              }
              className={disabled ? 'readOnly' : 'select'}
              onBlur={field.onBlur}
              isDisabled={disabled}
              isMulti
              closeMenuOnSelect={false}
              value={
                field.value === undefined
                  ? []
                  : field.value.map((item) =>
                      options.find((option) => option.value === item.id),
                    )
              }
              options={options}
            />
          </BaseControl>
        );
      }}
    </Field>
  );
};
