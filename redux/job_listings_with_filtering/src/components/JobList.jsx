import { JobPosition } from './JobPosition';
import { useDispatch, useSelector } from 'react-redux';
import { selectVisiblePositions } from '../store/positions/position-selectors';
import { addFilter } from "../store/filters/filter-actions";
import { selectFilters } from "../store/filters/filter-selectors";

const JobList = () => {
  const dispatch = useDispatch();
  const currentFilters = useSelector(selectFilters);
  const position = useSelector((state) => selectVisiblePositions(state, currentFilters));

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
