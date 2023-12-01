import React from 'react';
import style from './Search.module.css'
import { ReactComponent as MagnySvg } from '#assets/img/svg/magnifying-glass.svg'
import { useSelector } from 'react-redux';
import { selectFetching } from '#redux/selectors/fetchingSelector';
import { useActions } from '#hooks/redux';
import { Link } from 'react-router-dom'
import { SEARCHFILMPAGE } from '#constants/paths'


const Search: React.FC = () => {
  const { inputValue } = useSelector(selectFetching)
  const { getInputValue, fetchFilms, restartLimitView } = useActions()



  return (
    <div className={style.wrapper}>
      <input
        type="text"
        className={style.searchInput}
        value={inputValue}
        onChange={(e) => { getInputValue(e.currentTarget.value) }}
      />
      <Link to={"/" + SEARCHFILMPAGE}
        className={style.searchButton}
        onClick={() => {
          restartLimitView()
          fetchFilms({ query: inputValue, page: 1 })
        }
        }
      >
        <MagnySvg className={style.svgImg} />
      </Link>
    </div>

  );
}
export default Search;