import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatDialogModule } from '@angular/material/dialog';
import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatTabsModule,
    BrowserAnimationsModule,
    DragDropModule,
    MatDialogModule,
    MatStepperModule,
    MatFormFieldModule
  ],
  exports: [
    MatCardModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatTabsModule,
    BrowserAnimationsModule,
    DragDropModule,
    MatDialogModule,
    MatStepperModule,
    MatFormFieldModule
  ]
})
export class MaterialModule { }
