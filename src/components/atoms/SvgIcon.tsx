type SVGIconProps = {
  svg: string;
  color?: string;
};

const SvgIcon = ({ svg, color }: SVGIconProps) => {
  return (
    <div
      className='currency-icon cell'
      dangerouslySetInnerHTML={{ __html: svg }}
      style={color ? { color: color } : undefined}
    />
  );
};

export { SvgIcon };
