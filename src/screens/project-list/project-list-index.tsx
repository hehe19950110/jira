import React, { useState } from "react"
import { List } from "./list"
import { SearchPanel } from "./search-panel"
import styled from "@emotion/styled"
import { Typography } from "antd"
import { useProjects } from "../../utils/project"
import { useUsers } from "../../utils/user"
import { useDebounce, useDocumentTitle } from "../../utils"
import { Helmet } from "react-helmet"
import { useProjectsSearchParams } from "./util"
import { Project } from "types/project"
import { ButtonNoPadding, Row } from "component/lib"

export const ProjectListScreen = () => {
  const [param, setParam] = useProjectsSearchParams();
  const { isLoading, error, data: list } = useProjects(useDebounce(param, 200));
  const { data: users } = useUsers();

  useDocumentTitle('项目列表' , false);

  return (
  <Container>
    <Row marginBottom={2} between={true}>
      <h1>项目列表</h1>
      <ButtonNoPadding type={"link"}/>
    </Row>
    <SearchPanel users={users || []} param={param} key={''} setParam={setParam}  />
    {error ? <Typography.Text type={"danger"}> {error.message} </Typography.Text> : null}
    <List loading={isLoading} users={users || []} dataSource={list || [] || null}/>
  </Container>
  );
  
}


const Container = styled.div`
padding: 3.2rem`