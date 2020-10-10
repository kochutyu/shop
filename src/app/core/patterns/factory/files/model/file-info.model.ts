import {IFileInfo} from '../interfaces/file-info.interface';

export class FileInfo implements IFileInfo {
  constructor(
    public size: number,
    public src: string
  ) {
  }
}
