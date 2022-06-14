import { CommonButton } from './CommonButton';

export const MutedButton = ({ children, ...remainingProps }) => (
  <CommonButton
    style={{
      backgroundColor: 'transparent',
      borderColor: 'muted.bg',
      color: 'muted.text',
      '&:hover, &:active, &:focus': {
        border: 'hover.border',
      },
    }}
    {...remainingProps}
  >
    {children}
  </CommonButton>
);
