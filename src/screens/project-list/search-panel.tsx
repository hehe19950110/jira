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

      <input type="text" 
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

      <select value={param.personId} 
              onChange={evt => setParam({
               ...param,
               personId: evt.target.value
      })}>
        <option value={''}>负责人</option>
        {
          users.map(users => <option value={users.id}>{users.name}</option>)
        }
      </select>

    </div>
  </form>
}