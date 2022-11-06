import { Dropdown, Menu, Table, TableProps  } from "antd"
import { ButtonNoPadding } from "component/lib";
import { Pin } from "component/pin-icon";
import dayjs from "dayjs";
import React from "react"
import { Link } from "react-router-dom";
import { useEditProject } from "utils/project";
import { Project } from "../../types/project";
import { User } from "../../types/user"
import { useProjectModal } from "./util";

// TODO 把所有ID改成number类型
interface ListProps extends TableProps<Project> {
  users: User[];
  //projectButton: JSX.Element;
}

export const List = ({users,...props}: ListProps) => {
  const {mutate} = useEditProject();
  const pinProject = (id: number) => (pin: boolean) => mutate({ id, pin });
  // 先获取 project.id， 再然后晚一点得到 pin

  return (
     <Table rowKey={"id"}
            pagination={false} 
            columns={[   
              {
                title: <Pin checked={true} disabled={true} />,
                render(value, project) {
                  return (
                    <Pin
                      checked={project.pin}
                      onCheckedChange={(pin) => {pinProject(project.id)}}
                    />
                  );
                },
              }, {
                title:'名称',
                sorter:(a,b) => a.name.localeCompare(b.name),
                render(value,project) {
                  return (
                    <Link to={`projects/${String(project.id)}`}>{project.name}</Link>
                  );
                }
              },{
                title: "部门",
                dataIndex: "organization",
              },{
                title:'负责人',
                render(value,project){
                  return (
                    <span>
                      {users.find((user) => user.id === project.personId)?.name || '未知'}
                    </span>
                  )
                }
              },{
                title: "创建时间",
                render(value, project) {
                  return (
                    <span>
                      {project.created
                        ? dayjs(project.created).format("YYYY-MM-DD") : "无"}
                    </span>
                  );
                },
              },{
                render(value,project) {
                  return (
                  <Dropdown 
                    overlay={
                      <Menu>
                        <Menu.Item key={'edit'}>
                          <ButtonNoPadding 
                            type={"link"} 
                          >
                            编辑
                          </ButtonNoPadding>
                        </Menu.Item>
                      </Menu>
                    }
                  >
                    <ButtonNoPadding type={"link"}>...</ButtonNoPadding>
                  </Dropdown>)
                }
              }
            ]} 
            {...props }
     />
     
  );
}


