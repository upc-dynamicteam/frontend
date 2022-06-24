import {Component, Input, OnInit} from '@angular/core';
import {ServiceProfileTouristService} from "../../services/service-profile-tourist.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css']
})
export class UpdateProfileComponent implements OnInit {

  constructor(private serviceProfileTourist: ServiceProfileTouristService, private activatedRoute: ActivatedRoute ) { }

  @Input()
  userInfo: any = {}

  ngOnInit(): void {
  }
  hideModalUpdate(){
      console.log(this.userInfo)
      let element = document.getElementById("modal-update")!
      element.style.display = "none"
      this.serviceProfileTourist.updateInfoUser(this.userInfo.id, this.userInfo).subscribe(() => {

      })
  }
}
