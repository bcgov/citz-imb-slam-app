import { useMemo } from 'react';
import * as Yup from 'yup';

export const useForm = (dataHook = () => { }, id) => {
    const dataHookResponse = dataHook(id)

    const initialValues = useMemo(() => {
        if (dataHookResponse.isLoading || dataHookResponse.isError) return {}
        const values = {};

        dataHookResponse.formFields.forEach((field) => {
            return (values[field.name] = field.initialValue)
        });

        return values;
    }, [dataHookResponse.formFields, dataHookResponse.isError, dataHookResponse.isLoading]);

    const validationSchema = useMemo(() => {
        if (dataHookResponse.isLoading || dataHookResponse.isError) return {}

        const schema = {};

        dataHookResponse.formFields.forEach((field) => (schema[field.name] = field.validation));

        return Yup.object(schema);
    }, [dataHookResponse.formFields, dataHookResponse.isError, dataHookResponse.isLoading]);

    const formFields = useMemo(() => {
        if (dataHookResponse.isLoading || dataHookResponse.isError) return []

        return dataHookResponse.formFields.map((field) => {
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
        })
    },
        [dataHookResponse.formFields, dataHookResponse.isError, dataHookResponse.isLoading],
    );

    return { ...dataHookResponse, formFields, initialValues, validationSchema }
}
