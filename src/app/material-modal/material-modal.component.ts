import {Component, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogData } from '../model/dialogData';

@Component({
  selector: 'material-modal.component',
  templateUrl: 'material-modal.component.html',
})
export class MaterialModalComponent {
  message!: string;

  constructor(
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<MaterialModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {
    this.message = data.message;
  }

  onClose(): void {
    this.dialogRef.close();
  }

  openDialog(message: string): void {
    this.message = message;
    const dialogRef = this.dialog.open(MaterialModalComponent, {
      width: '400px',
      data: {message: this.message},
    });
  }
}