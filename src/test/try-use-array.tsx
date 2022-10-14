import { useArray, useMount } from "../utils";
import React from "react";

export const TsReactTest = () => {
  const persons : {name: string; age : number} [] = [
    {name : "jack", age : 25},
    {name : "mack", age : 29},
  ];
  const { value, clear, removeIndex ,add} = useArray(persons);

  useMount (() => {
    // console.log(value.notExist);
    
    // add( {name : "zack"});

    // removeIndex("123")
  });

  return (
    <div>
      <button onClick={() => add ({name:"john", age:90})}> add join </button>
      {/* 点击后增加 john */}

      <button onClick={() => removeIndex (0)}> remove 0  </button>
      {/* 点击后 删除第一项 */}

      <button style={{marginBottom:"50px"}} onClick ={ () => clear()} > clear </button>
      {/* 点击以后清空列表 */}

      {value.map((person:{age:number,name:string},index:number) => (
        <div style={{marginBottom:"30px"}}>
          <span style={{color:"red"}}>{index}</span>
          <span>{person.name}</span>
          <span>{person.age}</span>
        </div>
      ))}
    </div>
  );
}