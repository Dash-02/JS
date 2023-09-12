import React, { useCallback,  useState } from "react";
import styles from "./Search.module.scss";
import debounce from "lodash.debounce";
import { useDispatch, useSelector } from "react-redux";
import { setSearchValue } from "../redux/slices/filterSlice";

const Search = () => {
  const dispatch = useDispatch()
  const searchValue = useSelector(state => state.filter.searchValue)
  const [valueLocal, setValueLocal] = useState("");
  const inputRef = React.useRef();
  const clickOnX = () => {
    dispatch(setSearchValue(""));
    setValueLocal("");
    inputRef.current.focus();
  };
  const searchEvenet = (event) => {
    testDebounce(event);
    setValueLocal(event.target.value);
  };
  const testDebounce = useCallback(
    debounce((event) => {
      dispatch(setSearchValue(event.target.value))
    }, 250),
    [],
  );
  return (
    <div className={styles.root}>
      <svg className={styles.icon} viewBox="0 0 24 24">
        <title />
        <g data-name="Layer 2" id="Layer_2">
          <path d="M18,10a8,8,0,1,0-3.1,6.31l6.4,6.4,1.41-1.41-6.4-6.4A8,8,0,0,0,18,10Zm-8,6a6,6,0,1,1,6-6A6,6,0,0,1,10,16Z" />
        </g>
      </svg>
      <input
        ref={inputRef}
        value={valueLocal}
        onChange={(event) => searchEvenet(event)}
        className={styles.input}
        placeholder="Поиск пиццы..."
        type="text"
      />
      {searchValue && (
        <svg
          onClick={() => clickOnX()}
          className={styles.clearIcon}
          height="14px"
          version="1.1"
          viewBox="0 0 14 14"
          width="14px"
        >
          <title />
          <desc />
          <defs />
          <g
            fill="none"
            fillRule="evenodd"
            id="Page-1"
            stroke="none"
            strokeWidth="1"
          >
            <g
              fill="#000000"
              id="Core"
              transform="translate(-341.000000, -89.000000)"
            >
              <g id="close" transform="translate(341.000000, 89.000000)">
                <path
                  d="M14,1.4 L12.6,0 L7,5.6 L1.4,0 L0,1.4 L5.6,7 L0,12.6 L1.4,14 L7,8.4 L12.6,14 L14,12.6 L8.4,7 L14,1.4 Z"
                  id="Shape"
                />
              </g>
            </g>
          </g>
        </svg>
      )}
    </div>
  );
};

export default Search;
