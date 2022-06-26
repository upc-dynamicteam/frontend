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

  ngOnInit(): void {
      this.activatedRoute.params.subscribe(({idService}) => {
          this.idService = idService
            this.updateService.getInfoServiceById(idService).subscribe((data) => {
                this.infoService = data
                console.log(data)
            })
      })
  }
  updateServiceFunction(){
    this.updateService.updateInfoServiceById(this.idService, this.infoService).subscribe(() => {

    })
  }
}
