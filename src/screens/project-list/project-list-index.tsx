import React from "react"
import { List } from "./list"
import { SearchPanel } from "./search-panel"
import styled from "@emotion/styled"
import { useProjects } from "../../utils/project"
import { useUsers } from "../../utils/user"
import { useDebounce, useDocumentTitle } from "../../utils"
import { Helmet } from "react-helmet"
import { useProjectModal, useProjectsSearchParams } from "./util"
import { ButtonNoPadding, ErrorBox, Row } from "component/lib"

export const ProjectListScreen = () => {

  useDocumentTitle('项目列表' , false);

  const { open } = useProjectModal();

  // 当 obj 是对象时 会无限循环；是基本类型时，就不会无限循环;
  // 基本类型，可以放在依赖里； 组件状态，可以放在依赖里；
  // 非组件状态的对象，绝不可以放在依赖里

  const [param, setParam] = useProjectsSearchParams();
  const {isLoading, error, data:list} = useProjects(useDebounce(param,200));
  const { data: users } = useUsers();


  return (
  <Container>
    <Row marginBottom={2} between={true}>
      <h1>项目列表</h1>
      <ButtonNoPadding onClick={open} type={"link"} >
        创建项目
      </ButtonNoPadding>
    </Row>

    <SearchPanel users={users || []} param={param} key={''} setParam={setParam}  />
    <ErrorBox error={error}/>
    <List 
        loading={isLoading}
        users={users || []}
        dataSource={list || []} 
    />
  </Container>
  );
  
}

ProjectListScreen.whyDidYouRender = true

const Container = styled.div`
padding: 3.2rem`