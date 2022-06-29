import { Component, OnInit } from '@angular/core';
import {AddServiceService} from "../../services/add-service.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-form-service',
  templateUrl: './form-service.component.html',
  styleUrls: ['./form-service.component.css']
})
export class FormServiceComponent implements OnInit {

    newService = {
        "name": "",
        "price": 0,
        "score": 0,
        "newPrice": 0,
        "location": "",
        "creationDate": "",
        "photos": "",
        "description": "",
        "isOffer": 0,
        "isPopular": 0,
        "agencyId": ""
    }
    idAgency: string = ""

  constructor(private addService:AddServiceService, private activatedRoute: ActivatedRoute, private router: Router  ) { }

  ngOnInit(): void {
        this.activatedRoute.params.subscribe(({id}) => {
           this.idAgency = id
        })
  }
  createNewService(){
      let today = new Date();
      let date = today.getDate() + '/'+ (today.getMonth()+1) + '/' + today.getFullYear();
      let randomNumber = Math.ceil(Math.random() * (200 - 100 + 1) + 100)
      this.newService.creationDate = date
      this.newService.photos = `https://picsum.photos/200/${randomNumber}`
      //this.newService.agencyId = this.idAgency;
      console.log(this.newService)
      this.addService.createNewService(this.newService, "2").subscribe(() => {
          this.router.navigate([`profile-agency/${this.idAgency}`]);
      })
  }

}
