import { JobPosition } from './JobPosition';
import {useDispatch, useSelector} from 'react-redux';
import { selectAllPosition } from '../redux/positions/position-selectors';
import {addFilter} from "../redux/filters/filter-actions";

const JobList = () => {
  const dispatch = useDispatch();
  const position = useSelector(selectAllPosition);
  const handleAddFilter = (filter) => {
    dispatch(addFilter(filter));
  }

  return (
    <div className='job-list'>
      { position.map( item =>
          <JobPosition
              key={item.id}
              handleAddFilter={handleAddFilter}
              {...item}
          /> )}
    </div>
  )
}

export {JobList};
