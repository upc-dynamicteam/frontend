import { Component, OnInit } from '@angular/core';

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

  constructor() { }
  ngOnInit(): void {
  }
  selectedValue!: string;
  status: Status[] = [
      {value: 'pendiente', viewValue: 'Pendiente'},
      {value: 'en progreso', viewValue: 'En progreso'},
      {value: 'finalizado', viewValue: 'Finalizado'},
  ];
}
