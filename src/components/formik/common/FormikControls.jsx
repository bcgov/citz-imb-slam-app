import { DropdownFormikControl } from '../inputs/DropdownFormikControl';
import { HiddenFormikControl } from '../inputs/HiddenFormikControl';
import { InputFormikControl } from '../inputs/InputFormikControl';
import { SelectChipFormikControl } from '../inputs/SelectChipFormikControl';
import { TextareaFormikControl } from '../inputs/TextareaFormikControl';
import { UserListControl } from '../inputs/UserListControl';

export const FormikControls = (props) => {
  const { control, ...remainingProps } = props;

  switch (control) {
    case 'hidden':
      return <HiddenFormikControl {...remainingProps} />;
    case 'text':
      return <InputFormikControl {...remainingProps} />;
    case 'number':
      return <InputFormikControl {...remainingProps} type="number" />;
    case 'textarea':
      return <TextareaFormikControl {...remainingProps} />;
    case 'date':
      return <InputFormikControl {...remainingProps} type="date" />;
    case 'select':
      return <DropdownFormikControl {...remainingProps} />;
    case 'selectChip':
      return <SelectChipFormikControl {...remainingProps} />;
    case 'userlist':
      return <UserListControl {...remainingProps} />;
    case 'radio':
      // return <RadioFormikControl {...remainingProps} />;
      return null;
    case 'checkbox':
      // return <CheckboxGroupFormikControl {...remainingProps} />;
      return null;
    case 'peoplepicker':
      // return <PeoplePickerFormikControl {...remainingProps} />;
      return null;
    case 'autocomplete':
      return null;
    case 'switch':
      // return <SwitchFormikControl {...remainingProps} />;
      return null;

    default:
      return null;
  }
};
