import {FileSizeTypeEnum} from '../enums/file-size-type.enum';

export interface IFileOption {
  sizeFormat: FileSizeTypeEnum;
  sizeRound: number;
}
