import { useQuery } from "react-query";
import { Project } from "types/project";
import { User } from "../types/user";
import { useHttp } from "./http";

export const useUsers = (param?: Partial<User>) => {
  const client = useHttp();

  return useQuery<User[]>(["users", param], () =>
    client("users", { data: param })
  );
};
