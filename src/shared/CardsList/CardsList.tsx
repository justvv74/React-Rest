import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listListRequestAsync } from "../../store/postList/action";
import { RootState } from "../../store/store";
import { GenericCardsList } from "./GenericCardsList";
import styled from "styled-components";
import { EmptyList } from "./EmptyList";

const LoadMoreBtn = styled.button`
  display: block;
  margin: 0 auto 40px;
  border: none;
  padding: 0;
  color: var(--blue);
  background-color: transparent;
  cursor: poiner;
`;

const Spiner = styled.span`
  display: block;
  margin: 0 auto;
  width: 33px;
  height: 33px;
  border: 5px solid #abcfd0;
  border-bottom-color: var(--blue);
  border-radius: 50%;
  line-height: 0;
  animation: rotation 1s linear infinite;

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const LoadingError = styled.div`
  margin: 0 auto 18px;
  color: var(--grey8F);
  text-align: center;
`;

export function CardsList() {
  const skeletonList = Array.from(Array(20), () => {
    return { id: 0 };
  });

  const [list, setList] = useState(skeletonList);
  const [listLoaded, setListLoaded] = useState(false);
  const [page, setPage] = useState(1);
  const [listPages, setListPages] = useState(1);
  const dispatch = useDispatch();

  const listData = useSelector<RootState, any>((state) => state.postList.data);
  const listPage = useSelector<RootState, number>(
    (state) => state.postList.page
  );
  const listLoading = useSelector<RootState, boolean>(
    (state) => state.postList.loading
  );
  const listLoadError = useSelector<RootState, {}>(
    (state) => state.postList.error
  );

  useEffect(() => {
    setPage(() => page + 1);
    dispatch(listListRequestAsync(page));
  }, []);

  useEffect(() => {
    setListPages(listPage);
  }, [listPage]);

  useEffect(() => {
    if (listLoaded) {
      if (list[0].id === 0) {
        setList([]);
      }
      setList((prevList) => prevList.concat(...listData));
    }
    setListLoaded(true);
  }, [listData]);

  function handleClick() {
    setPage(() => page + 1);
    dispatch(listListRequestAsync(page));
  }

  console.log("pages", listPages);
  return (
    <>
      <GenericCardsList list={list} />
      {listLoadError !== "" && <LoadingError>Ошибка при загрузке</LoadingError>}
      {page <= listPages && !listLoading && list.length !== 0 && (
        <LoadMoreBtn
          onClick={() => {
            handleClick();
          }}
        >
          Показать ещё
        </LoadMoreBtn>
      )}

      {listLoadError !== "" && (
        <LoadMoreBtn
          onClick={() => {
            handleClick();
          }}
        >
          Повторить попытку
        </LoadMoreBtn>
      )}

      {listLoading && listLoaded && <Spiner></Spiner>}
      {list.length === 0 &&
        listLoadError === "" &&
        !listLoading &&
        !listLoaded && <EmptyList />}
    </>
  );
}
