import { Badge } from 'UI/Badge';
import { Card } from 'UI/Card';
import { Stack } from 'UI/Stack';

import {useDispatch, useSelector} from 'react-redux';
import {selectFilters} from '../store/filters/filter-selectors';
import {removeFilter, clearFilter} from '../store/filters/filter-actions';


const FilterPanel = () => {
const dispatch = useDispatch();
  const currentFilters = useSelector(selectFilters);

  if(currentFilters.length === 0) {
    return null;
  }

  return (
    <Card className="filter-panel">
      <div className="filter-panel-wrapper">
        <Stack>
          {currentFilters.map((filter) => {
            return <Badge key={filter} onClear={() => dispatch(removeFilter(filter))} variant="clearable">{filter}</Badge>
          })}
        </Stack>

        <button onClick={() => dispatch(clearFilter)} className='link'>Clear</button>
      </div>
    </Card>
  )
}

export {FilterPanel};