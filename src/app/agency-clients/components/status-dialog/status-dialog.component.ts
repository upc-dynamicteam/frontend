import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

interface Status {
    value: string;
    viewValue: string;
}

@Component({
  selector: 'app-status-dialog',
  templateUrl: './status-dialog.component.html',
  styleUrls: ['./status-dialog.component.css']
})
export class StatusDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<StatusDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  ngOnInit(): void {
  }

  selectedStatus!: string;

  status: Status[] = [
      {value: 'pendiente', viewValue: 'Pendiente'},
      {value: 'en progreso', viewValue: 'En progreso'},
      {value: 'finalizado', viewValue: 'Finalizado'},
  ];

    onNoClick(): void {
        this.dialogRef.close();
    }
}
