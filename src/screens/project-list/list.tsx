import { Table, TableProps  } from "antd"
import dayjs from "dayjs";
import React from "react"
import { Link } from "react-router-dom";
import { Project } from "../../types/project";
import { User } from "../../types/user"


interface ListProps extends TableProps<Project> {
  users: User[];
}

export const List = ({ users,...props }: ListProps) => {
  return (
    //console.log(users),
    //console.log(props),
     <Table rowKey={"id"}
            pagination={false} 
            columns={[          
              {
                title:'名称',
                dataIndex:'name',
                sorter:(a,b) => a.name.localeCompare(b.name),
              },{
                title: "部门",
                dataIndex: "organization",
              },{
                title:'负责人',
                render(value,project){
                  return (
                    <span>
                      {users.find((user) => user.id === project.id)?.name || '未知'}
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
                
                // render(value, project) {
                //   return <More project={project} />;
                // },
              },
            ]} 
            {...props }
     />
     
  );
}


