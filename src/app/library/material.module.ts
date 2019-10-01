import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatMenuModule} from '@angular/material/menu';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { MatTableModule } from '@angular/material'  
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatInputModule,
    MatToolbarModule,
    MatSidenavModule,
	  MatCardModule,
 	  MatListModule,
    MatIconModule,
    MatButtonModule,
	  MatProgressSpinnerModule,
    MatTooltipModule,
	  MatDialogModule,
    MatFormFieldModule,
    MatSelectModule,
	  MatMenuModule,
	  MatTableModule,
    MatCheckboxModule
  ],
  exports: [
    MatInputModule,
    MatToolbarModule,
    MatSidenavModule,
	  MatCardModule,
 	  MatListModule,
    MatIconModule,
    MatButtonModule,
	  MatProgressSpinnerModule,
    MatTooltipModule,
	  MatDialogModule,
    MatFormFieldModule,
    MatSelectModule,
	  MatMenuModule,
	  MatTableModule,
    MatCheckboxModule
  ]
})
export class MaterialModule { }
