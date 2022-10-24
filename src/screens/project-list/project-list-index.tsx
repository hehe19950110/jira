import React from "react"
import { List } from "./list"
import { SearchPanel } from "./search-panel"
import { useState } from "react"
import styled from "@emotion/styled"
import { Typography } from "antd"
import { useProjects } from "../../utils/project"
import { useUsers } from "../../utils/user"
import { useDebounce } from "../../utils"

export const ProjectListScreen = () => {

  const [param, setParam] = useState({
    name:"",
    personId:"",
  });
  const debouncedParam = useDebounce(param, 500);
  const { isLoading, error, data: list } = useProjects(debouncedParam);
  const {data:users} = useUsers();

  return (
  <Container>
    <h2>项目列表</h2>
    <SearchPanel users={users || []} param= {param} key={''} setParam= {setParam} />
    {error ? <Typography.Text type={"danger"}> {error.message} </Typography.Text> : null}
    <List loading={isLoading} users={users || []} dataSource={list || [] || null}/>

  </Container>
  );
  
}


const Container = styled.div`
padding: 3.2rem`