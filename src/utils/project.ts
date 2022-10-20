import { useEffect } from "react";
import { cleanObject } from "./index";
import { Project } from "../types/project";
import { useAsync } from "./use-async";
import { useHttp } from "./http";

export const useProjects = (param?: Partial<Project>) => {
  const client = useHttp();
  const { run, ...result } = useAsync<Project[]>();

  useEffect(() => {
    run(client("projects", { data: cleanObject(param || {}) }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [param]);

  return result;
};

// export const useProjects = (param?: Partial<Project>) => {
//   const client = useHttp();

//   return useQuery<Project[]>(["projects", cleanObject(param)], () =>
//     client("projects", { data: param })
//   );
// };

// export const useEditProject = (queryKey: QueryKey) => {
//   const client = useHttp();
//   return useMutation(
//     (params: Partial<Project>) =>
//       client(`projects/${params.id}`, {
//         method: "PATCH",
//         data: params,
//       }),
//     useEditConfig(queryKey)
//   );
// };

// export const useAddProject = (queryKey: QueryKey) => {
//   const client = useHttp();

//   return useMutation(
//     (params: Partial<Project>) =>
//       client(`projects`, {
//         data: params,
//         method: "POST",
//       }),
//     useAddConfig(queryKey)
//   );
// };

// export const useDeleteProject = (queryKey: QueryKey) => {
//   const client = useHttp();

//   return useMutation(
//     ({ id }: { id: number }) =>
//       client(`projects/${id}`, {
//         method: "DELETE",
//       }),
//     useDeleteConfig(queryKey)
//   );
// };
