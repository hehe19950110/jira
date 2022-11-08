import React from "react"
import { Link, Navigate, NavLink, Route, Routes } from "react-router-dom"
import { EpicScreen } from "screens/epic/epic-index"
import { KanbanScreen } from "screens/kanban/kanban-index"

export const ProjectScreen = () => {
  return (
    <div>
      <h1>ProjectScreen</h1>
      <Link to={'kanban'}>看板</Link>
      <Link to={'epic'}>任务组</Link>
      <Routes>
        <Route path={"kanban"} element={<KanbanScreen />} />
        <Route path={"epic"} element={<EpicScreen />} />
        <Route index element={<KanbanScreen />} />
        {/* <Route element={<Navigate to={'kanban'} />}/> 
            <Navigate to={window.location.pathname + "/kanban"}/> 
        <Route path="*" element={<Navigate to="/kanban" replace={true}/>} /> */} 
      </Routes>
    </div>
  ) 
  
}