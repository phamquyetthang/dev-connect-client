import { FunctionComponent, memo, ReactNode, useState } from 'react';
import { VerticalTabWrapper } from './style';

interface IProps {
  tabs: Array<{
    key: number;
    label: string;
    icon: ReactNode;
  }>;
}

const VerticalTab: FunctionComponent<IProps> = memo(({ tabs }) => {
  const [activeTab, setActiveTab] = useState<number>(1);
  return (
    <VerticalTabWrapper>
      <div>
        <div className="verticalTab__tab">Tab1</div>
      </div>
      <div>
        {tabs.map((item) => (
          <div className="verticalTab__menu">
            <span className="verticalTab__menu__label">{item.label}</span>
            {item.icon}
          </div>
        ))}
      </div>
    </VerticalTabWrapper>
  );
});

export default VerticalTab;
