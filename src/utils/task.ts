import { useQuery } from "react-query";
import { Project } from "types/project";
import { Task } from "types/task";
import { useDebounce } from "utils";
import { useHttp } from "./http";

export const useTasks = (param?: Partial<Task>) => {
  const client = useHttp();
  const debouncedParam = { ...param, name: useDebounce(param?.name, 200) };

  return useQuery<Task[]>(["tasks", param], () =>
    client("tasks", { data: param })
  );
};

export const useTask = (id?: number) => {
  const client = useHttp();
  return useQuery<Project>(["task", { id }], () => client(`tasks/${id}`), {
    enabled: Boolean(id),
  });
};
