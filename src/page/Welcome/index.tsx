import { useCallback, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import Button from 'src/components/Base/Button';
import HeaderBar from 'src/components/Common/HeaderBar';
import { WelcomeTranslateKeyType } from 'src/lib/translations/vn/welcome';
import CreateProject from './components/CreateProject';
import { WelcomeWrapper } from './style';

const Welcome = () => {
  const [isShowCreate, setIsShowCreate] = useState<boolean>(false);
  const {control, handleSubmit} = useForm();
  const { t } = useTranslation();
  const word = useCallback(
    (title: WelcomeTranslateKeyType) => t(`welcomeTranslate.${title}`),
    [t]
  );
  const handleSubmitCreate = (data: any) => {

  }
  return (
    <WelcomeWrapper>
      <HeaderBar />
      <h1>CS DEV CONNECT</h1>
      <Button title={word('add')} onClick={() => setIsShowCreate(true)} />
      <div></div>
      <CreateProject
        isShowCreate={isShowCreate}
        onCloseCreate={() => setIsShowCreate(false)}
        onSubmitCreate={handleSubmit(handleSubmitCreate)}
        control={control}
      />
    </WelcomeWrapper>
  );
};

export default Welcome;
