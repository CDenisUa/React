import { Badge } from '../UI/Badge';
import { Stack } from '../UI/Stack';
import { Card } from '../UI/Card';
import { useDispatch, useSelector } from "react-redux";
import { selectFilters } from "../store/filters/filter-selectors";
import {clearFilter, removeFilter} from "../store/filters/filter-actions";

const FilterPanel = () => {
  const dispatch = useDispatch();
  const currentFilter = useSelector(selectFilters);
  if(!currentFilter.length) {
    return null;
  }

  return (
    <Card className='filter-panel'>
      <div className='filter-panel-wrapper'>
        <Stack>
          { currentFilter.map( filter =>
              <Badge
                  key={filter}
                  variant='clearable'
                  onClear={() => dispatch(removeFilter(filter))}
              >
                {filter}
              </Badge>)
          }
        </Stack>
        <button
            onClick={ () => dispatch(clearFilter) }
            className='link'
        >Clear</button>
      </div>
    </Card>
  )
}

export {FilterPanel};
