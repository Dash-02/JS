import React, {useCallback} from "react";
import { useDispatch, useSelector } from "react-redux";
import Catagories from "../components/Catagories.jsx";
import PizzaSkeleton from "../components/PizzaBlock/Skeleton";
import PizzaBlock from "../components/PizzaBlock/index.jsx";
import Sort from "../components/Sort.jsx";
import Pagination from "../components/pagination/index.jsx";
import {
  selectCategoryId,
  selectorCurrentPage,
  selectorPizzas,
  selectorSearchValue,
  selectorSortType,
  setCaterId,
  setCurrentPage,
} from "../components/redux/slices/filterSlice";
import { fetchPizzas } from "../components/redux/slices/pizzasSlice";
import { Link } from "react-router-dom";

const Home = () => {
  const onClickCategory = useCallback((id) => {
    dispatch(setCaterId(id));
  }, []);
  const dispatch = useDispatch();
  const categoriesId = useSelector(selectCategoryId);
  const searchValue = useSelector(selectorSearchValue);
  const currentPage = useSelector(selectorCurrentPage);
  const sortType = useSelector(selectorSortType);
  const { items, status } = useSelector(selectorPizzas);

  const fakeArr = [
    [undefined],
    [undefined],
    [undefined],
    [undefined],
    [undefined],
  ];
  const searchsValue = searchValue ? `&search=${searchValue}` : "";
  React.useEffect(() => {
    const asyncfunc = async () => {
      dispatch(
        fetchPizzas({ currentPage, categoriesId, sortType, searchsValue }),
      );
    };
    asyncfunc();
  }, [categoriesId, sortType, searchValue, currentPage]);
  const pizzasFilter = items.filter((obj) => {
    return obj.title.toLowerCase().includes(searchValue.toLowerCase());
  });
  pizzasFilter.map((obj) => {
    return <PizzaBlock key={obj.id} {...obj} />;
  });
  //
  //
  return (
    <>
      <div className="container">
        {" "}
        <div className="content__top">
          <Catagories
            value={categoriesId}
            onClickCategory={onClickCategory}
          />
          <Sort />
        </div>
        <h2 className="content__title">Все пиццы</h2>
        <div className="content__items">
          {status === "error"
            ? (
              <div className="content__error-info">
                <h2>Произошла ошибка</h2>
                <p>
                  К сожалению не удалось получить пиццы. Попробуйте повторить
                  попытку позже.
                </p>
              </div>
            )
            : status === "loading"
            ? (
              fakeArr.map((obj) => {
                return <PizzaSkeleton key={obj.id} {...obj} />;
              })
            )
            : pizzasFilter
            ? (
              pizzasFilter.map((obj) => {
                return <PizzaBlock key={obj.id} {...obj} />;
              })
            )
            : (
              items.map((obj) => {
                return <PizzaBlock key={obj.id} {...obj} />;
              })
            )}
        </div>
        <Pagination
          currentPage={currentPage}
          setCurrentPage={dispatch(setCurrentPage)}
        />
      </div>
    </>
  );
};

export default Home;
