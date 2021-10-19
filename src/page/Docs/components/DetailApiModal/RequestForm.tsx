import { FunctionComponent } from 'react';
interface IProps {
  title: string;
  requestType: 'json' | 'from';
}
const RequestForm: FunctionComponent<IProps> = ({ title, requestType }) => {
  return (
    <div>
      <div>
        <span>{title}</span> <span>{requestType}</span>
      </div>
    </div>
  );
};

export default RequestForm;
