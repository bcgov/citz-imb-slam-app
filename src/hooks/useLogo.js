import { Typography } from '@mui/material';
import Image from 'next/image';
import {
  adobecc,
  docker,
  mural,
  openshift,
  powerbi,
  rocketchat,
  visualstudio,
} from '../assets';

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

    case 'adobecc':
      return (
        <Image src={adobecc} alt={title} layout="fill" className="logo-small" />
      );

    case 'openshift':
      return (
        <Image
          src={openshift}
          alt={title}
          layout="fill"
          className="logo-small"
        />
      );

    case 'rocketchat':
      return (
        <Image
          src={rocketchat}
          alt={title}
          layout="fill"
          className="logo-small"
        />
      );

    case 'powerbi':
      return (
        <Image src={powerbi} alt={title} layout="fill" className="logo-small" />
      );

    case 'visualstudio':
      return (
        <Image
          src={visualstudio}
          alt={title}
          layout="fill"
          className="logo-small"
        />
      );

    case 'docker':
      return (
        <Image src={docker} alt={title} layout="fill" className="logo-small" />
      );

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
