export const setFormFields = (dataHookResponse) => {
    if (dataHookResponse.isLoading || dataHookResponse.isError) return []

    return dataHookResponse.formFields.map((field) => {
        const newField = {};
        for (const [key, value] of Object.entries(field)) {
            if (key === 'validation') {
                newField.required = value.spec.presence === 'required';
            } else if (key !== 'initialValue' && key !== 'sortOrder' && key !== 'show') {
                newField[key] = value;
            }
        }
        if (newField.fullWidth) {
            newField.breakPoints = { xs: 12, sm: 12, md: 12, lg: 12, xl: 12 };
        } else {
            newField.breakPoints = { xs: 12, sm: 12, md: 6, lg: 6, xl: 6 };
        }
        return newField;
    })
}
