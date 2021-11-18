import { FunctionComponent } from 'react';
import { PaginationWrapper } from './style';
import { ReactComponent as BackIcon } from 'src/assets/icons/back.svg';
import { ReactComponent as DotsIcon } from 'src/assets/icons/dots.svg';
import { ReactComponent as NextIcon } from 'src/assets/icons/next.svg';
import clsx from 'clsx';

interface IProps {
  current: number;
  totalPage: number;
  onChangePage: (page: number) => void;
}
const Pagination: FunctionComponent<IProps> = ({
  totalPage,
  current,
  onChangePage,
}) => {
  const from = current <= 5 ? 1 : current - 1;
  const to = current <= 5 ? 5 : current + 3;
  return (
    <PaginationWrapper>
      {current !== 1 && <BackIcon onClick={() => onChangePage(current - 1)} />}
      {from !== 1 && (
        <>
          <span onClick={() => onChangePage(1)}>1</span>
          <DotsIcon />
        </>
      )}
      {Array.from({ length: totalPage }, (_, i) => i + 1).map((i) => {
        if (i >= from && i <= to) {
          return (
            <span
              className={clsx({ active: i === current })}
              onClick={() => onChangePage(i)}
            >
              {i}
            </span>
          );
        }
        return null;
      })}
      {totalPage > 5 && (
        <>
          <DotsIcon />
          <span
            className={clsx({ active: totalPage === current })}
            onClick={() => onChangePage(totalPage)}
          >
            {totalPage}
          </span>
        </>
      )}

      {current !== totalPage && (
        <NextIcon onClick={() => onChangePage(current + 1)} />
      )}
    </PaginationWrapper>
  );
};

export default Pagination;
