import { useMemo, useState } from "react";

// 项目列表搜索的参数
export const useProjectsSearchParams = () => {
  const [param, setParam] = useState(["name", "personId"]);
  return [
    useMemo(() => ({ ...param, personId: Number() || undefined }), [param]),
    setParam,
  ] as const;
};

export const useProjectsQueryKey = () => {
  const [params] = useProjectsSearchParams();
  return ["projects", params];
};
