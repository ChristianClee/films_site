import React from 'react';
import style from './Search.module.css'
import { ReactComponent as MagnySvg } from '../../../assets/img/svg/magnifying-glass.svg'
import { useSelector } from 'react-redux';
import { selectFetching } from '../../../redux/selectors/fetchingSelector';
import { useActions } from '../../../hooks/redux';
// import { fetchBooks } from '../../../redux/actions/fetchingActions';
// import { useDispatch } from 'react-redux';

const Search: React.FC = () => {
  const { inputValue } = useSelector(selectFetching)
  const { getInputValue, fetchFilms } = useActions()
  // const dispatch = useDispatch()
  // console.log(dispatch)

  
  return (
    <div className={style.wrapper}>
      <input
        type="text"
        className={style.searchInput}
        value={inputValue}
        onChange={(e) => { getInputValue(e.currentTarget.value) }}
      />
      <button
        className={style.searchButton}
        onClick={() => fetchFilms(inputValue) }
      >
        <MagnySvg className={style.svgImg} />
      </button>
    </div>
          
  );
}
export default Search;