
import { Button, Input } from "antd";
import { Row } from "component/lib";
import { TaskTypeSelect } from "component/task-type-select";
import { UserSelect } from "component/user-select";
import React from "react";
import { useSetUrlSearchParam } from "utils/url";
import { useTasksSearchParams } from "./util";

export const SearchPanel = () => {
  const searchParams = useTasksSearchParams();
  const setSearchParams = useSetUrlSearchParam();
  const reset = () => {
    setSearchParams({
      typeId: undefined,
      processorId: undefined,
      tagId: undefined,
      name: undefined,
    });
  };

  return (
    <Row marginBottom={4} gap={true}>
      <Button onClick={reset}>清除筛选器</Button>
    </Row>
  );
};
