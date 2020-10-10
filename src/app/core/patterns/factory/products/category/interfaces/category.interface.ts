import {IFile} from '../../../files/interfaces/file.interface';

export interface ICategory {
  name: string;
  file: IFile | Array<IFile>;
}
