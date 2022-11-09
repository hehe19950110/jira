import styled from "@emotion/styled";
import { Button, Card, Dropdown, Menu, Modal } from "antd";
import React from "react";
import { Container } from "react-dom";
import { Kanban } from "types/kanban";
import { Task } from "types/task";
import { useTasks } from "utils/task";
import { useTasksSearchParams } from "./util";

// const TaskTypeIcon = ({ id }: { id: number }) => {

//   return <img alt={"task-icon"} />;
// };

// const TaskCard = ({ task }: { task: Task }) => {
//   return (
//     <Card
//       onClick={() => {}}
//       style={{ marginBottom: "0.5rem", cursor: "pointer" }}
//       key={task.id}
//     >
//     </Card>
//   );
// };

export const KanbanColumn = ({ kanban }: { kanban: Kanban }) => {
  const { data: allTasks } = useTasks( useTasksSearchParams() );
  const tasks = allTasks?.filter( task => task.kanbanId === kanban.id);

  return (
    <div>
      <h2>{kanban.name}</h2>
      {tasks?.map(task => 
        <div key={task.id}>
          {task.name}
        </div>
      )}
    </div>
  );
};

const More = ({ kanban }: { kanban: Kanban }) => {
  const startDelete = () => {
    Modal.confirm({
      okText: "确定",
      cancelText: "取消",
      title: "确定删除看板吗",
      onOk() {
        return ;
      },
    });
  };
  const overlay = (
    <Menu>
      <Menu.Item>
        <Button type={"link"} onClick={startDelete}>
          删除
        </Button>
      </Menu.Item>
    </Menu>
  );
  return (
    <Dropdown overlay={overlay}>
      <Button type={"link"}>...</Button>
    </Dropdown>
  );
};
