import { Input, Select } from "antd";
import React from "react"
import { User } from "../../types/user";

interface SearchPanelProps {
  users: User[],
  param: {
    name: string,
    personId:string,
  },
  setParam: (param: SearchPanelProps["param"]) => void;
}

export const SearchPanel = ({users, param, setParam}: SearchPanelProps) => {
 
  return <form>
    <div>

      <Input type="text" 
             value={param.name} 
             onChange={evt => setParam({
               ...param,
               name: evt.target.value
       })} />
      {/*setParam({
        ...param,
        name:evt.target.value
      })
      同 setParam(Object.assign({},param,{name:evt.target.value})) */}

      <Select value={param.personId} 
              onChange={value => setParam({
               ...param,
               personId: value
      })}>
        <Select.Option value={''}>负责人</Select.Option>
        {
          users.map(users => <Select.Option value={users.id}>{users.name}</Select.Option>)
        }
      </Select>

    </div>
  </form>
}