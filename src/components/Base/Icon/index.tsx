import { FunctionComponent, memo, useEffect, useState } from 'react';
import { IconWrapper } from './style';

interface IProps {
  name: string;
  className?: string;
}
const Icon: FunctionComponent<IProps> = memo(({ name, className }) => {
  const [state, setState] = useState('');
  async function getIcon(name: string) {
    const { default: namedImport } = await import(
      `src/assets/icons/${name}.svg`
    );
    setState(namedImport);
  }

  useEffect(() => {
    try {
      getIcon(name);
    } catch (error) {
      console.log(error);
    }
  }, [name]);
  return (
    <IconWrapper className={className}>
      <img src={state} alt={`icon_${name}`} />
    </IconWrapper>
  );
});

export default Icon;
