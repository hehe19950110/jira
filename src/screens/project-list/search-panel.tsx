import { Form, Input, Select } from "antd";
import React from "react"
import { Project } from "types/project";
import { User } from "../../types/user";
//import {jsx} from '@emotion/react';
interface SearchPanelProps {
  users: User[],
  key: number | string,
  // param: {
  //   name: string,
  //   personId:string,
  // },
  param: Partial<Pick<Project, "name" | "personId">>;
  setParam: (param: SearchPanelProps["param"]) => void;
}

export const SearchPanel = ({users, param, setParam}: SearchPanelProps) => {
 
  return( 
  <Form style={{ marginRight: "2rem" , marginBottom: "1rem"}} layout={"inline"} >
    <Form.Item>
      <Input placeholder={'项目名'}
             type="text" 
             value={param.name} 
             onChange={evt => setParam({
               ...param,
               name: evt.target.value
       })} />
    </Form.Item>

    <Form.Item>
      <Select value={param.personId} 
              onChange={value => setParam({
               ...param,
               personId: value
      })}>
        <Select.Option key={''} value={''}>负责人</Select.Option>
        {
          users.map(users => <Select.Option key={''} value={users.id}>{users.name}</Select.Option>)
        }
      </Select>
    </Form.Item>
  </Form>
  )
}