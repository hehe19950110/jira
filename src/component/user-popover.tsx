import styled from "@emotion/styled";
import { Button, Divider, List, Popover, Typography } from "antd";
import React from "react";
import { useProjectModal } from "screens/project-list/util";
import { useProjects } from "utils/project";
import { useUsers } from "utils/user";
import { ButtonNoPadding } from "./lib";

export const UserPopover = () => {
  const {data:users, refetch } = useUsers();

  const content = (
    <ContentContainer>
      <Typography.Text type={"secondary"}>
        组员列表
      </Typography.Text>

      <List>
        {
          users?.map( user => (
          <List.Item key={user.id}>
            <List.Item.Meta title={user.name} />
          </List.Item>))
        }
      </List>
      <Divider />
    </ContentContainer>
  )

  return (
    <Popover onVisibleChange={() => refetch()} placement={"bottom"} content={content} >
      <span>组员</span>
    </Popover>
  );
};

const ContentContainer = styled.div`
  min-width: 30rem;
`;
