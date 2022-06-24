import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input()
  userInfo: any = {}

  showUpdateModal(){
      let element = document.getElementById("show")!
      let child = element.firstElementChild!
      let x = (child as HTMLElement).style.display = "block"

  }


}
