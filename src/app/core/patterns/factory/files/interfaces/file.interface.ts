import {IFileOption} from './file-option.interface';
import {IFileInfo} from './file-info.interface';

export interface IFile {
  file: File;
  option: IFileOption;
  info?: IFileInfo;
}
