import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {UpdateServiceService} from "../../services/update-service.service";

@Component({
  selector: 'app-form-service-update',
  templateUrl: './form-service-update.component.html',
  styleUrls: ['./form-service-update.component.css']
})
export class FormServiceUpdateComponent implements OnInit {

  constructor(private updateService: UpdateServiceService,  private activatedRoute: ActivatedRoute, private router: Router ) { }

    infoService: any = {}
    idService: string = ""
    idAgency: string = ""

  ngOnInit(): void {
      this.activatedRoute.params.subscribe(({id, idService}) => {
          this.idService = idService
          this.idAgency = id
            this.updateService.getInfoServiceById(idService).subscribe((data) => {
                this.infoService = data
                console.log(data)
            })
      })
  }
  updateServiceFunction(){
      console.log("PRUEBA", this.infoService)
    this.updateService.updateInfoServiceById(this.idAgency, this.idService, this.infoService).subscribe(() => {
        this.router.navigate([`profile-agency/${this.idAgency}`]);
    })
  }
}
