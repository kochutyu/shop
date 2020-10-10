import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatSliderModule} from '@angular/material/slider';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatSliderModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule
  ],
  exports: [
    MatSliderModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule
  ],
  providers: []
})
export class MaterialModule {
}
