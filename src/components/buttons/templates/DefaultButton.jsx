import { CommonButton } from './CommonButton';

export const DefaultButton = ({ children, ...remainingProps }) => (
  <CommonButton {...remainingProps}>{children}</CommonButton>
);
