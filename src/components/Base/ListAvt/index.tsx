import { FunctionComponent } from 'react';
import { ReactComponent as DotsIcon } from 'src/assets/icons/dots.svg';
import { ListAvtWrapper } from './style';
interface IPerson {
  name: string;
  avt?: string;
  id?: string;
}
interface IProps {
  people: IPerson[];
}
const ListAvt: FunctionComponent<IProps> = ({ people }) => {
  return (
    <ListAvtWrapper>
      {people.slice(0, 3).map((item) => {
        if (item.avt) {
          return <img src={item.avt} alt="avt" className="avt_mem" />;
        } else {
          return <div className="avt_mem">{item.name.slice(0, 1)}</div>;
        }
      })}
      <div className="avt_mem">
        <DotsIcon />
      </div>
    </ListAvtWrapper>
  );
};

export default ListAvt;
