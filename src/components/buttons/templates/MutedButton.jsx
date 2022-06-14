import { CommonButton } from './CommonButton';

export const MutedButton = ({ buttonText, ...remainingProps }) => (
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
    {buttonText}
  </CommonButton>
);
