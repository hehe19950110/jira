import { Table  } from "antd"
import React from "react"
import { Project } from "../../types/project";
import { User } from "../../types/user"


interface ListProps {
  users: User[];
  list : Project[];

}

export const List = ({ users, list }: ListProps) => {
  return <Table pagination={false} 
                dataSource={list}
                columns={
                  [{
                    title:'名称',
                    dataIndex:'name',
                    sorter:(a,b) => a.name.localeCompare(b.name),
                  },{
                    title: "部门",
                    dataIndex: "organization",
                  },{
                    title:'负责人',
                    render(value,project){
                      return <span>{users.find(user => user.id === project.personId)?.name || '未知'}</span>
                    }
                  }]
  } >
  </Table>
}


