export enum FileEvent {
    ADD_FILE = 'ADD_FILE',
    DEL_FILE = 'DEL_FILE'
}

export interface IFile {
    addFile(): Promise<string>;
    delFIle(): Promise<void>;
    emit(event: FileEvent, data: any)
}