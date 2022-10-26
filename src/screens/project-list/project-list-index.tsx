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
import { useUrlQueryParam } from "utils/url"

export const ProjectListScreen = () => {

  // 当 obj 是对象时 会无限循环；是基本类型时，就不会无限循环;
  // 基本类型，可以放在依赖里； 组件状态，可以放在依赖里；
  // 非组件状态的对象，绝不可以放在依赖里
  const [keys, setKeys] = useState<('name' | 'personId')[]>(['name', 'personId'])
  const [ param, setParam] = useUrlQueryParam(keys);
  console.log(param,'param')
  const debouncedParam = useDebounce(param,200);
  const {isLoading, error, data:list } = useProjects(debouncedParam);
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

ProjectListScreen.whyDidYouRender = true

const Container = styled.div`
padding: 3.2rem`