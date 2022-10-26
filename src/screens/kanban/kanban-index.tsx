import React from "react";
import { useDocumentTitle } from "utils";

export const KanbanScreen = () => {
  useDocumentTitle("看板列表");
  return <h1>看板</h1>;
}