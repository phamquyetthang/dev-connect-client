import { ChangeEvent, FunctionComponent, useCallback, useState } from 'react';
import { ReactComponent as SearchIcon } from 'src/assets/icons/search.svg';
import { ReactComponent as FilterIcon } from 'src/assets/icons/filter.svg';
import { ReactComponent as AddIcon } from 'src/assets/icons/plus.svg';
import Button from 'src/components/Base/Button';
import { InputBasic } from 'src/components/Base/Input';
import { HeaderToolWrapper } from './styled';
import { CommonTranslateKeyType } from 'src/lib/translations/vn/common';
import { useTranslation } from 'react-i18next';

interface IProps {
  handleAddNew: () => void;
}

const HeaderTool: FunctionComponent<IProps> = ({ handleAddNew }) => {
  const { t } = useTranslation();
  const commonWord = useCallback(
    (title: CommonTranslateKeyType) => t(`commonTranslate.${title}`),
    [t]
  );
  const [searchKey, setSearchKey] = useState<string>('');
  const onChangSearchKey = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchKey(e.target.value);
  };

  return (
    <HeaderToolWrapper>
      <div className="filter_bar">
        <SearchIcon className="filter_bar__search_icon" />
        <InputBasic
          value={searchKey}
          onChange={onChangSearchKey}
          className="filter_bar__search"
        />
        <button className="filter_bar__filter">
          <FilterIcon />
          <span>{commonWord('filter')}</span>
        </button>
      </div>
      <Button
        title={commonWord('create')}
        onClick={handleAddNew}
        leftIcon={<AddIcon />}
      />
    </HeaderToolWrapper>
  );
};

export default HeaderTool;
