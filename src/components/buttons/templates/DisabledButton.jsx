import { CommonButton } from './CommonButton';
import { styled } from '@mui/material/styles';
import { Tooltip, tooltipClasses } from '@mui/material';

const LightTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.white,
    color: 'rgba(0, 0, 0, 0.77)',
    boxShadow: theme.shadows[1],
    fontSize: 13,
  },
}));

export const DisabledButton = ({ children, ...remainingProps }) => (
  <LightTooltip title="Not allowed with active licensees. Please remove licensees first.">
    <CommonButton
      style={{
        backgroundColor: 'transparent',
        borderColor: '#ddd !important',
        color: '#bbb',
        '&:hover, &:active, &:focus': {
          border: 'hover.border',
          bgcolor: 'transparent',
          cursor: 'not-allowed',
        },
      }}
      {...remainingProps}
    >
      {children}
    </CommonButton>
  </LightTooltip>
);
