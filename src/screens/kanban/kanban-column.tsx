import { Button, Card, Dropdown, Menu, Modal } from "antd";
import React from "react";
import { Kanban } from "types/kanban";
import { Task } from "types/task";
import { useTasks } from "utils/task";
import { useTaskTypes } from "utils/task-type";
import { useTasksSearchParams } from "./util";
import taskIcon from 'assets/task.svg'
import bugIcon from 'assets/bug.svg'
import styled from "@emotion/styled";
import { CreateTask } from "./create-task";

const TaskTypeIcon = ({ id }: { id: number }) => {
  const {data : taskTypes } = useTaskTypes();
  const name = taskTypes?.find( taskTypes => taskTypes.id === id)?.name
  if (!name) {
    return null
  }
  return <img src={name === 'task' ? taskIcon : bugIcon} alt='' />;
};

const TaskCard = ({ task }: { task: Task }) => {
  return (
    <Card
      onClick={() => {}}
      style={{ marginBottom: "0.5rem", cursor: "pointer" }}
      key={task.id}
    >
    </Card>
  );
};

export const KanbanColumn = ({ kanban }: { kanban: Kanban }) => {
  const { data: allTasks } = useTasks( useTasksSearchParams() );
  const tasks = allTasks?.filter( task => task.kanbanId === kanban.id);

  return (
    <Container>
      <h2>{kanban.name}</h2>
      <More kanban={kanban} key={kanban.id} />

      <TasksContainer>
        {tasks?.map(task =>( 
          <Card style={{marginBottom: '0.5rem'}} key={task.id}>
            <div>{task.name}</div>
            <TaskTypeIcon id={task.typeId} />
          </Card>
        ))}
      <CreateTask kanbanId={kanban.id} />
      </TasksContainer>

    </Container>
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

export const Container = styled.div`
  min-width: 27rem;
  border-radius: 6px;
  background-color: rgb(244, 245, 247);
  display: flex;
  flex-direction: column;
  padding: 0.7rem 0.7rem 1rem;
  margin-right: 1.5rem;
`;

const TasksContainer = styled.div`
  overflow: scroll;
  flex: 1;
  ::-webkit-scrollbar {
    display: none;
  }
`;
