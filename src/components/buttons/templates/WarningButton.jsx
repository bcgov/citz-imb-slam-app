import { CommonButton } from './CommonButton';

export const WarningButton = ({ buttonText, ...remainingProps }) => (
  <CommonButton
    style={{
      backgroundColor: 'transparent',
      borderColor: 'primary.warning',
      color: 'primary.warning',
    }}
    {...remainingProps}
  >
    {buttonText}
  </CommonButton>
);
