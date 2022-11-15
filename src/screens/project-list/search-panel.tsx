import { Form, Input, Select } from "antd";
import { UserSelect } from "component/user-select";
import React from "react"
import { Project } from "types/project";
import { User } from "../../types/user";
//import {jsx} from '@emotion/react';
interface SearchPanelProps {
  users: User[],
  param: Partial<Pick<Project, "name" | "personId" >> ;
  setParam: (param: SearchPanelProps["param"]) => void;
}

export const SearchPanel = ({users, param, setParam}: SearchPanelProps) => {
  //console.log(users,'users')
 
  return( 
  <Form style={{ marginRight: "2rem" , marginBottom: "1rem"}} layout={"inline"} >
    <Form.Item>
      <Input placeholder={'项目名'}
             type="text" 
             value={param.name} 
             onChange={evt => setParam({
               ...param,
               name: evt.target.value
              })
            }
       />
    </Form.Item>

    <Form.Item>
      <UserSelect defaultOptionName={"负责人"}
                  value={param.personId} 
                  onChange={ (value) => setParam({
                    ...param,
                    personId: value,
                  })} 
      />
    </Form.Item>
  </Form>
  )
}