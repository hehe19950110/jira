import React from "react"
import { List } from "./list"
import { SearchPanel } from "./search-panel"
import { useEffect, useState } from "react"
import { cleanObject, useMount, useDebounce} from "../../utils"
import { useHttp } from "../../types/http"

//const apiUrl = process.env.REACT_APP_API_URL

export const ProjectListScreen = () => {

  const [users, setUsers] = useState([])
  const [param, setParam] = useState({
    name:'',
    personId:''
  })
  const debouncedParam = useDebounce(param,500)
  const [list, setList] = useState([])
  const client = useHttp()

  useEffect( () => {
    client('projects', {data:cleanObject(debouncedParam)}).then(setList)
    // fetch(`${apiUrl}/projects?${qs.stringify(cleanObject(debouncedParam))}`).then(
    //   async (response) => {
    //     if (response.ok) {
    //       setList(await response.json())
    //     }
    //   }
    // )
  },[client, debouncedParam])

  useMount( () => {
    client('users').then(setUsers)
    // fetch(`${apiUrl}/users`).then(async (response:Response) => {
    //   if (response.ok) {
    //     setUsers(await response.json())
    //   }
    // })
  })
  
  return <div>
    <SearchPanel users={users} param= {param} setParam= {setParam} />
    <List users={users} list = {list} />

  </div>
}