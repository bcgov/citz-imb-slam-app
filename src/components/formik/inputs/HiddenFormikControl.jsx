import { Field } from 'formik';

export const HiddenFormikControl = (props) => {
  const { name, breakPoints, ...remainingProps } = props;

  return <Field type="hidden" name={name} {...remainingProps} />;
};
