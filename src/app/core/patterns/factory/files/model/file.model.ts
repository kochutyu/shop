import {IFile} from '../interfaces/file.interface';
import {IFileOption} from '../interfaces/file-option.interface';
import {IFileInfo} from '../interfaces/file-info.interface';
import {FILE_SIZE} from '../constants/size.constant';

export class FileModel implements IFile {

  constructor(
    public file: any,
    public option: IFileOption,
    public info: IFileInfo
  ) {
    this.initFile();
  }

  private initFile(): void {
    this.initSizeInfo();
    this.initSizeFormatOffset();
  }

  private initSizeInfo(): void {
    if (!this.info.size) {
      this.info.size = +(this.file.total / this.option.sizeFormat).toFixed(this.option.sizeRound);
    }
  }

  private initSizeFormatOffset(): void {
    if (!this.option.sizeFormatOffset) {
      this.option.sizeFormatOffset = FILE_SIZE.find(f => f.format === this.option.sizeFormat).formatOffset;
    }
  }

}
