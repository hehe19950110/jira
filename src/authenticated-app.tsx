import React from "react";
import { useAuth } from "./context/auth-context";
import { ProjectListScreen } from "./screens/project-list/project-list-index";
import styled from "@emotion/styled";
import { Row } from "./component/lib";
import { ReactComponent as SoftwareLogo } from "./assets/software-logo.svg";
import { Button, Dropdown, Menu } from "antd";
import { Navigate, Route, Routes,} from "react-router";
import { BrowserRouter as Router } from "react-router-dom";
import { ProjectScreen } from "screens/project";
import { resetRoute } from "utils";

export const AuthenticatedApp = () => {
  return (
    <Container>
      <PageHeader />
      <Main>
        <Router>
          <Routes>
            <Route path={"projects"} element={<ProjectListScreen />} />
            <Route path={"projects/:projectId/*"} element={<ProjectScreen />} />
            <Route element={<Navigate to={'/projects'} />}/>
          </Routes>
        </Router>

      </Main>
    </Container>
  );
}

const PageHeader = () => {
  const {logout,user} = useAuth();
  return <Header between={true} >
    <HeaderLeft gap={true}>
      <Button type={"link"} onClick={resetRoute}>
       <SoftwareLogo width={"18rem"} color={"rgb(38, 132, 255)"} />
      </Button>
      <h2>项目</h2>
      <h2>用户</h2>
    </HeaderLeft>

    <HeaderRight >
      <Dropdown overlay={
        <Menu>
          <Menu.Item key={"logout"}>
            <Button onClick={logout} type={"link"}> 登出 </Button>
          </Menu.Item>
        </Menu>
        }>
        <Button type={"link"} onClick={(e) => e.preventDefault()}>
          Hi,{user?.name}
        </Button>
      </Dropdown>
    </HeaderRight>
  </Header>

}


/* 
从内容出发，用flex ; 你先有一组内容(数量一般不固定),然后希望他们均匀的分布在容器中，由内容自己的大小决定占据的空间
从布局出发，用grid ; 先规划网格(数量一般比较固定)，然后再把元素往里填充
*/

const Container = styled.div`
  display: grid;
  grid-template-rows: 6rem 1fr;
  height: 100vh;
`;

 const Header = styled(Row)`
 box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.5);
 padding: 3.2rem; 
 `
 const HeaderLeft = styled(Row)`
 `

 const HeaderRight = styled.div`
 `

const Main = styled.main`
  height: calc(100vh - 6rem) ;
`;
