import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import {PasswordPageComponent} from "../password-page/password-page.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-code-page',
  templateUrl: './code-page.component.html',
  styleUrls: ['./code-page.component.css']
})
export class CodePageComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  code = new FormControl('', [Validators.required]);

  codeButtonForm() {
    this.dialog.closeAll();
    const dialogRef = this.dialog.open(PasswordPageComponent, {restoreFocus: false});
  }
}
