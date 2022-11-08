export interface Task {
  id: number;
  name: string; // 经办人
  processorId: number;
  projectId: number; //项目
  epicId: number; // 任务组
  kanbanId: number;
  typeId: number; // bug or task
  note: string;
}
