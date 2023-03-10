import React from "react";
import { useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";
import { RootState } from "../../store/store";
import { CardModal } from "../CardModal";
import { CardsList } from "../CardsList/CardsList";

export function RoutesList() {
  const data = useSelector<RootState, any>((state) => state.postData.data);

  return (
    <Routes>
      <Route path="/" element={<CardsList />} />
      <Route path="/:id" element={<CardModal data={data} />} />
    </Routes>
  );
}
