import { ReactSVG } from 'react-svg';

type SVGIconProps = {
  src: string;
  color?: string;
};

const SvgIcon = ({ src, color }: SVGIconProps) => {
  return (
    <div className='currency-icon cell'>
      <ReactSVG
        src={src}
        style={color ? { color: color } : undefined}
      />
    </div>
  );
};

export { SvgIcon };
