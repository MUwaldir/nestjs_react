
export interface Task {
    _id:string;
    title:string;
    description?:string;
    done?:boolean;
    createdAt:Date;
    updatedAt:Date;
}

export type CreateTask = Omit<TextTrackList,'_id'|'createdAt'|'updatedAt'>;

export type UpdateTask = Partial<CreateTask>
