import { FunctionComponent, useCallback } from 'react';
import { Control } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import InputField from 'src/components/Base/Input';
import Modal from 'src/components/Base/Modal';
import TextArea from 'src/components/Base/TextArea';
import { CommonTranslateKeyType } from 'src/lib/translations/vn/common';
import { WelcomeTranslateKeyType } from 'src/lib/translations/vn/welcome';
import { CreateProjectWrapper } from './style';
interface IProps {
  isShowCreate: boolean;
  onCloseCreate: () => void;
  onSubmitCreate: () => void;
  control: Control<any>;
}
const CreateProject: FunctionComponent<IProps> = ({
  isShowCreate,
  onCloseCreate,
  onSubmitCreate,
  control,
}) => {
  const { t } = useTranslation();
  const commonWord = useCallback(
    (title: CommonTranslateKeyType) => t(`commonTranslate.${title}`),
    [t]
  );
  const welcomeWord = useCallback(
    (title: WelcomeTranslateKeyType) => t(`welcomeTranslate.${title}`),
    [t]
  );
  return (
    <Modal
      isShow={isShowCreate}
      closeBtn={commonWord('close')}
      submitBtn={commonWord('create')}
      title={welcomeWord('add')}
      onClose={onCloseCreate}
      onSubmit={onSubmitCreate}
    >
      <CreateProjectWrapper>
        <InputField
          control={control}
          name="name"
          placeholder={welcomeWord('name')}
          title={welcomeWord('name')}
        />
        <InputField
          control={control}
          name="description"
          placeholder={welcomeWord('des')}
          title={welcomeWord('des')}
        />

        <InputField
          control={control}
          name="member"
          placeholder={welcomeWord('addMember')}
          title={welcomeWord('addMember')}
        />
        <TextArea
          control={control}
          name="readme"
          placeholder="ReadMe"
          title="ReadMe"
        />
      </CreateProjectWrapper>
    </Modal>
  );
};

export default CreateProject;
