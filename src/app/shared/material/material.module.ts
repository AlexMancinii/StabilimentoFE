import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatOptionModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MaterialModalComponent } from 'src/app/material-modal/material-modal.component';
import { MatInputModule } from '@angular/material/input';
import { MatDividerModule } from '@angular/material/divider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from 'src/app/app-routing/app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import {MatExpansionModule} from '@angular/material/expansion';


@NgModule({
  declarations: [],
  
  imports: [
    CommonModule,
    MatTableModule,
    MatFormFieldModule,
    MatOptionModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatCheckboxModule,

    MatInputModule,
    MatDividerModule,
    MatToolbarModule,
    MatMenuModule,
    MatSidenavModule,
    MatExpansionModule

  ],
  exports:[
    MatTableModule,
    MatFormFieldModule,
    MatOptionModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatCheckboxModule,
    
    MatInputModule,
    MatDividerModule,
    MatToolbarModule,
    MatMenuModule,
    MatSidenavModule,
    MatExpansionModule
  ],
  providers: [
  MaterialModalComponent,
  {
    provide:MatDialogRef,
    useValue:{}
  },
  {
    provide:MAT_DIALOG_DATA,
    useValue:{}
  }
],
})
export class MaterialModule {}
