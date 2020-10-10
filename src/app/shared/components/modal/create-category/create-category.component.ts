import {Component, OnInit} from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';

import {CategoryFactory} from '../../../../core/patterns/factory/products/category/category.factory';
import {FilesFactory} from '../../../../core/patterns/factory/files/files.factory';

import {IMG_FORMAT_PARSE} from '../../../../core/constants/helper.constant';

import {FileOption} from '../../../../core/patterns/factory/files/model/file-option.model';
import {Category} from '../../../../core/patterns/factory/products/category/models/category.model';

import {ICategory} from '../../../../core/patterns/factory/products/category/interfaces/category.interface';
import {IFile} from '../../../../core/patterns/factory/files/interfaces/file.interface';
import {IFileOption} from '../../../../core/patterns/factory/files/interfaces/file-option.interface';

import {FileSizeTypeEnum} from '../../../../core/patterns/factory/files/enums/file-size-type.enum';

export interface DialogData {
  category: CategoryFactory;
}

@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.scss']
})
export class CreateCategoryComponent implements OnInit {

  imageFile: IFile;

  categoryName = '';
  isUploadImage = false;

  constructor(
    public dialogRef: MatDialogRef<CreateCategoryComponent>
  ) {
  }

  get IMG_FORMATS(): string {
    return IMG_FORMAT_PARSE;
  }

  get submitStatus(): boolean {
    return this.isUploadImage && this.categoryName.split('').length > 0;
  }

  ngOnInit(): void {
  }

  closeDialog(): void {
    this.dialogRef.close();
  }

  addCategory(): void {
    const category: ICategory = new Category(this.categoryName, this.imageFile);
    this.dialogRef.close(category);
  }

  selectImage(event): void {
    const files = event.target.files;
    const fileOption: IFileOption = new FileOption(FileSizeTypeEnum.MB, 2);
    const factory = new FilesFactory(files, fileOption);
    factory.getFileList().subscribe(images => this.imageFile = images[0]);
    this.isUploadImage = true;
  }
}
