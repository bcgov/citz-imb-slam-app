import { CommonButton } from './CommonButton';

export const WarningButton = ({ children, ...remainingProps }) => (
  <CommonButton
    style={{
      backgroundColor: 'transparent',
      borderColor: 'primary.warning',
      color: 'primary.warning',
    }}
    {...remainingProps}
  >
    {children}
  </CommonButton>
);
