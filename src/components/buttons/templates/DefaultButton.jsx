import { CommonButton } from './CommonButton';

export const DefaultButton = ({ buttonURL, buttonText, onClick, type }) => (
  <CommonButton href={buttonURL} onClick={onClick} type={type}>
    {buttonText}
  </CommonButton>
);
