import {IFile} from '../interfaces/file.interface';
import {IFileOption} from '../interfaces/file-option.interface';
import {IFileInfo} from '../interfaces/file-info.interface';

export class FileModel implements IFile {
  constructor(
    public file: any,
    public option: IFileOption,
    public info: IFileInfo
  ) {
    this.initSizeInfo();
  }

  private initSizeInfo(): void {
    this.info.size = +(this.file.total / this.option.sizeFormat).toFixed(this.option.sizeRound);
  }
}
