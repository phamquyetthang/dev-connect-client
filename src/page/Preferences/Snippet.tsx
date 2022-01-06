import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import SyntaxHighlighter from 'react-syntax-highlighter/dist/esm/default-highlight';
import { BoxWithHeader } from 'src/components/Base/Box';
import Button from 'src/components/Base/Button';
import CopyField from 'src/components/Base/CopyField';
import { TextAreaNormal } from 'src/components/Base/TextArea';
import { useAppSelector } from 'src/hooks/useAppSelector';
import { PreferencesWrapper } from './styles';
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import Modal from 'src/components/Base/Modal';
import { InputNormal } from 'src/components/Base/Input';
import { ISnippetEdit } from 'src/services/user/types';

const SnippetScreen = () => {
  const history = useHistory();
  const snippetList = useAppSelector(
    (state) => state.user.preferences?.snippets
  );

  const [edit, setEdit] = useState('');
  const [showAdd, setShowAdd] = useState(false);
  const [addData, setAddData] = useState<ISnippetEdit>({
      name: '',
      template: '',
      isDefault: false,
  })

  const onEnableEdit = async (id: string) => {
    if (!edit) {
      setEdit(id);
    } else if (edit !== id) {
      setEdit(id);
    } else {
    }
  };

  return (
    <PreferencesWrapper>
      <Button
        title="Go back"
        onClick={() => history.goBack()}
        className="goBack_btn"
      />
      <BoxWithHeader
        title="Tự tạo template của bạn"
        btnTitle="Tạo"
        handleClickBtn={() => setShowAdd(true)}
      >
        {null}
      </BoxWithHeader>

      {snippetList?.map((snippet) => (
        <BoxWithHeader
          title={snippet.name}
          btnTitle={edit === snippet._id ? 'Save' : 'Edit'}
          handleClickBtn={() => onEnableEdit(snippet._id)}
        >
          {edit === snippet._id ? (
            <TextAreaNormal value={snippet.template} fullSize />
          ) : (
            <CopyField
              value={snippet.template}
              className="copy-zone"
              display={
                <SyntaxHighlighter language="javascript" style={a11yDark}>
                  {snippet.template}
                </SyntaxHighlighter>
              }
            />
          )}
        </BoxWithHeader>
      ))}

      <Modal
        isShow={showAdd}
        closeBtn="Close"
        onClose={() => setShowAdd(false)}
        title="Create code template"
      >
        <InputNormal value="" title="Tên" />
        <TextAreaNormal value='' title='Template' />
      </Modal>
    </PreferencesWrapper>
  );
};

export default SnippetScreen;
