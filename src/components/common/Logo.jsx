import { Typography } from '@mui/material';
import Image from 'next/image';
import {
  adobecc,
  dockerpro,
  mural,
  openshift,
  powerbi,
  rocketchat,
  visualstudio,
  photoshop,
  indesign,
  dreamweaver,
  illustrator,
  toad,
  snagit,
  slido,
  msproject,
  msvisio,
  camtasia,
  adobepro,
} from '../../assets';

export const Logo = ({ logoName, title }) => {
  switch (logoName) {
    case 'adobepro':
      return (
        <Image
          src={adobepro}
          alt={title}
          layout="fill"
          className="logo-small"
        />
      );
    case 'toad':
      return (
        <Image src={toad} alt={title} layout="fill" className="logo-small" />
      );

    case 'snagit':
      return (
        <Image src={snagit} alt={title} layout="fill" className="logo-small" />
      );

    case 'slido':
      return (
        <Image src={slido} alt={title} layout="fill" className="logo-small" />
      );

    case 'msproject':
      return (
        <Image
          src={msproject}
          alt={title}
          layout="fill"
          className="logo-small"
        />
      );

    case 'msvisio':
      return (
        <Image src={msvisio} alt={title} layout="fill" className="logo-small" />
      );

    case 'camtasia':
      return (
        <Image
          src={camtasia}
          alt={title}
          layout="fill"
          className="logo-small"
        />
      );

    case 'indesign':
      return (
        <Image
          src={indesign}
          alt={title}
          layout="fill"
          className="logo-small"
        />
      );

    case 'illustrator':
      return (
        <Image
          src={illustrator}
          alt={title}
          layout="fill"
          className="logo-small"
        />
      );

    case 'dreamweaver':
      return (
        <Image
          src={dreamweaver}
          alt={title}
          layout="fill"
          className="logo-small"
        />
      );

    case 'photoshop':
      return (
        <Image
          src={photoshop}
          alt={title}
          layout="fill"
          className="logo-small"
        />
      );

    case 'photoshopcc2018':
      return (
        <Image
          src={photoshop}
          alt={title}
          layout="fill"
          className="logo-small"
        />
      );

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

    case 'dockerpro':
      return (
        <Image
          src={dockerpro}
          alt={title}
          layout="fill"
          className="logo-small"
        />
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
