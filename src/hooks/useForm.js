import { useMemo, useCallback } from 'react'
import * as Yup from 'yup'

export const useForm = (formFields, dataHook) => {

    const data = dataHook() || {}

    const initialValues = useMemo(() => {
        const values = {};

        formFields.forEach((field) => (values[field.name] = field.initialValue));

        return values;
    }, [formFields]);

    const validationSchema = useMemo(() => {
        const schema = {};

        formFields.forEach((field) => (schema[field.name] = field.validation));

        return Yup.object(schema);
    }, [formFields]);

    const transformedFields = useMemo(
        () =>
            formFields.map((field) => {
                const newField = {};
                for (const [key, value] of Object.entries(field)) {
                    if (key === 'validation') {
                        newField.required = value.spec.presence === 'required';
                    } else if (key !== 'initialValue') {
                        newField[key] = value;
                    }
                }
                if (newField.fullWidth) {
                    newField.breakPoints = { xs: 12, sm: 12, md: 12, lg: 12, xl: 12 };
                } else {
                    newField.breakPoints = { xs: 12, sm: 12, md: 6, lg: 4, xl: 3 };
                }
                return newField;
            }),
        [formFields],
    );

    return { ...data, initialValues, validationSchema, transformedFields }
}
