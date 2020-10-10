import {IFileOption} from '../interfaces/file-option.interface';
import {FILE_SIZE} from '../constants/size.constant';
import {FileSizeTypeEnum} from '../enums/file-size-type.enum';

export class FileOption implements IFileOption {

  constructor(
    public sizeFormat: FileSizeTypeEnum,
    public sizeRound: number,
    public sizeFormatOffset?: string
  ) {
    this.initOption();
  }

  private initOption(): void {
    this.initSizeFormatOffset();
  }

  private initSizeFormatOffset(): void {
    this.sizeFormatOffset = FILE_SIZE.find(f => f.format === this.sizeFormat).formatOffset;
  }

}
