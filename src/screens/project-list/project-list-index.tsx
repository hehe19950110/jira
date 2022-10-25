import React from "react"
import { List } from "./list"
import { SearchPanel } from "./search-panel"
import styled from "@emotion/styled"
import { Typography } from "antd"
import { useProjects } from "../../utils/project"
import { useUsers } from "../../utils/user"
import { useDebounce, useDocumentTitle } from "../../utils"
import { Helmet } from "react-helmet"
import { useProjectsSearchParams } from "./util"

export const ProjectListScreen = () => {

  // const [param, setParam] = useState({
  //   name:"",
  //   personId:"",
  // });
  // const debouncedParam = useDebounce(param, 500);
  // const { isLoading, error, data: list } = useProjects(debouncedParam);
  const [param,setParam] = useProjectsSearchParams();
  const { isLoading, error, data: list } = useProjects(useDebounce(param, 200));
  const {data:users} = useUsers();

  useDocumentTitle('项目列表' , false);

  return (
  <Container>
    {/* react-Helmet 用react语法 给react页面 设置页面头部的配置：
    <Helmet>
     <title>项目列表</title>
    </Helmet> 
    */}
    <h1>项目列表</h1>
    <SearchPanel users={users || []} param= {param} key={''} setParam= {setParam} />
    {error ? <Typography.Text type={"danger"}> {error.message} </Typography.Text> : null}
    <List loading={isLoading} users={users || []} dataSource={list || [] || null}/>

  </Container>
  );
  
}


const Container = styled.div`
padding: 3.2rem`