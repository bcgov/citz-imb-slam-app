import * as Yup from 'yup'

export const setSchema = (dataHookResponse) => {
    if (dataHookResponse.isLoading || dataHookResponse.isError) return {}

    const schema = {};

    dataHookResponse.formFields.forEach((field) => (schema[field.name] = field.validation));

    return Yup.object(schema);
}
