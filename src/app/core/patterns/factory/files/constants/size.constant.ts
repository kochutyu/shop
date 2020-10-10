import {IFileSize} from '../interfaces/file-size.interface';
import {FileSizeTypeEnum} from '../enums/file-size-type.enum';

export const FILE_SIZE: IFileSize[] = [
  {
    format: FileSizeTypeEnum.Bytes,
    formatOffset: 'Bytes'
  },
  {
    format: FileSizeTypeEnum.KB,
    formatOffset: 'KB'
  },
  {
    format: FileSizeTypeEnum.MB,
    formatOffset: 'MB'
  },
  {
    format: FileSizeTypeEnum.GB,
    formatOffset: 'GB'
  }, {
    format: FileSizeTypeEnum.TB,
    formatOffset: 'TB'
  }, {
    format: FileSizeTypeEnum.PB,
    formatOffset: 'PB'
  }
];
