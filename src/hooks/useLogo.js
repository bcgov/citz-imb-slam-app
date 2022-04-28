import {
  mural,
  adobecc,
  openshift,
  rocketchat,
  powerbi,
  visualstudio,
  docker,
} from '../assets';
import Image from 'next/image';
import { Typography } from '@mui/material';

export const useLogo = (logoName, title) => {
  if (logoName === 'mural')
    return (
      <Image src={mural} alt={title} layout="fill" className="logo-small" />
    );

  switch (logoName) {
    case 'mural':
      return (
        <Image src={mural} alt={title} layout="fill" className="logo-small" />
      );
      break;

    case 'adobecc':
      return (
        <Image src={adobecc} alt={title} layout="fill" className="logo-small" />
      );
      break;

    case 'openshift':
      return (
        <Image
          src={openshift}
          alt={title}
          layout="fill"
          className="logo-small"
        />
      );
      break;

    case 'rocketchat':
      return (
        <Image
          src={rocketchat}
          alt={title}
          layout="fill"
          className="logo-small"
        />
      );
      break;

    case 'powerbi':
      return (
        <Image src={powerbi} alt={title} layout="fill" className="logo-small" />
      );
      break;

    case 'visualstudio':
      return (
        <Image
          src={visualstudio}
          alt={title}
          layout="fill"
          className="logo-small"
        />
      );
      break;

    case 'docker':
      return (
        <Image src={docker} alt={title} layout="fill" className="logo-small" />
      );
      break;

    default:
      return (
        <Typography
          className="logo-initial"
          variant="span"
          sx={{ color: '#ffffff' }}
        >
          {title.charAt(0).toUpperCase()}
        </Typography>
      );
  }
};
