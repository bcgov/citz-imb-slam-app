import React from 'react';
import { HiddenFormikControl } from '../inputs/HiddenFormikControl';
import { InputFormikControl } from '../inputs/InputFormikControl';
import { TextareaFormikControl } from '../inputs/TextareaFormikControl';
import { SelectFormikControl } from '../inputs/SelectFormikControl';
import { SelectChipFormikControl } from '../inputs/SelectChipFormikControl';

export const FormikControls = (props) => {
	const { control, ...remainingProps } = props;

	switch (control) {
		case 'hidden':
			return <HiddenFormikControl {...remainingProps} />;
		case 'text':
			return <InputFormikControl {...remainingProps} />;
		case 'number':
			return <InputFormikControl {...remainingProps} type='number' />;
		case 'textarea':
			return <TextareaFormikControl {...remainingProps} />;
		case 'date':
			return <InputFormikControl {...remainingProps} type='date' />;
		case 'select':
			// return <SelectFormikControl {...remainingProps} />;
			return <DropdownFormikControl {...remainingProps} />;
		case 'selectChip':
			return <SelectChipFormikControl {...remainingProps} />;
		case 'radio':
		// return <RadioFormikControl {...remainingProps} />;
		case 'checkbox':
		// return <CheckboxGroupFormikControl {...remainingProps} />;
		case 'peoplepicker':
		// return <PeoplePickerFormikControl {...remainingProps} />;
		case 'autocomplete':
		case 'switch':
		// return <SwitchFormikControl {...remainingProps} />;

		default:
			return null;
	}
};
