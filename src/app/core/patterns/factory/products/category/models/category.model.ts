import {ICategory} from '../interfaces/category.interface';
import {IFile} from '../../../files/interfaces/file.interface';

export class Category implements ICategory{
  constructor(
    public name: string,
    public file: IFile | Array<IFile>
  ) {
  }
}
