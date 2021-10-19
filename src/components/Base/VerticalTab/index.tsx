import { uniqueId } from 'lodash';
import { FunctionComponent, memo, ReactNode, useState } from 'react';
import { VerticalTabWrapper } from './style';

interface IProps {
  menu: Array<{
    key: number;
    label: string;
    icon: ReactNode;
  }>;
  tabs: Array<{
    key: number;
    tab: ReactNode;
  }>;
}

const VerticalTab: FunctionComponent<IProps> = memo(({ menu, tabs }) => {
  const [activeTab, setActiveTab] = useState<number>(1);
  
  const renderTab = tabs.find((item) => item.key === activeTab)?.tab || null;

  return (
    <VerticalTabWrapper>
      <div>
        <div className="verticalTab__tab">{renderTab}</div>
      </div>
      <div>
        {menu.map((item) => (
          <div
            className={`verticalTab__menu${
              activeTab === item.key ? ' active' : ''
            }`}
            key={uniqueId('menu_tab_')}
            onClick={() => setActiveTab(item.key)}
          >
            <span className="verticalTab__menu__label">{item.label}</span>
            {item.icon}
          </div>
        ))}
      </div>
    </VerticalTabWrapper>
  );
});

export default VerticalTab;
