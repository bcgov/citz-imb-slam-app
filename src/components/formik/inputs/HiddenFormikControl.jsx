import { Field } from 'formik';

export const HiddenFormikControl = (props) => {
	const { name, ...remainingProps } = props;

	return <Field type='hidden' name={name} {...remainingProps} />;
};
