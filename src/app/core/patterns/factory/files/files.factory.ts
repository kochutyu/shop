import {Observable, Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

import {FileModel} from './model/file.model';
import {FileInfo} from './model/file-info.model';

import {IFile} from './interfaces/file.interface';
import {IFileOption} from './interfaces/file-option.interface';

export class FilesFactory {

  private FILES: Array<IFile> = [];

  private loadedFilesSub$: Subject<Array<IFile>> = new Subject<Array<IFile>>();
  private FILES$: Observable<Array<IFile>> = this.loadedFilesSub$.asObservable();

  private destroy$: Subject<void> = new Subject<void>();

  constructor(
    public files: FileList,
    public options: IFileOption
  ) {
  }

  private get FILES_RESULT$(): Observable<Array<IFile>> {
    return this.FILES$.pipe(
      takeUntil(this.destroy$)
    );
  }

  public getFileList(): Observable<Array<IFile>> {
    Object.keys(this.files).forEach((key, index, array) => {
      const reader = new FileReader();
      reader.onload = (
        (load) => {
          reader.readAsDataURL(load);
          return (e: any) => this.initFile(e, index, array);
        }
      )(this.files[key]);
    });
    return this.FILES_RESULT$;
  }

  private initFile(event: any, index: number, array: any): void {
    if (event.loaded === event.total) {
      const file: IFile = new FileModel(event, this.options, new FileInfo(null, event.target.result));
      this.generateFileList(file);
      this.unsubscribe(index, array);
    }
  }

  private generateFileList(file: IFile): void {
    this.FILES.push(file);
  }

  private unsubscribe(index: number, array: any): void {
    if (index === array.length - 1) {
      this.loadedFilesSub$.next(this.FILES);
      this.destroy$.next();
    }
  }
}
