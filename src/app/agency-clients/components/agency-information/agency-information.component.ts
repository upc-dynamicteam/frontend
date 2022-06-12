import { Component, OnInit, ViewChild } from '@angular/core';
import { AgenciesService } from "../../services/agencies.service";
import { Agency } from "../../interfaces/agency";

@Component({
  selector: 'app-agency-information',
  templateUrl: './agency-information.component.html',
  styleUrls: ['./agency-information.component.css']
})
export class AgencyInformationComponent implements OnInit {

  constructor(private agenciesService: AgenciesService) { }

  agencyData!: Agency;
  defaultPhoto: string = "/assets/img/perfil-empty.png";

  editedImage: any;
  imageUrl!: string;

  isEditMode = false;
  editData!: Agency;

  description!: string;
  location!: string;
  ruc!: string;
  phoneNumber!: string;

  ngOnInit(): void {
      this.getAgencyData("a1");
  }

  getAgencyData(id: string) {
      this.agenciesService.getById(id).subscribe((response: any) => {
          this.agencyData = response;
      })
  }

  editInitialization() {
      this.description = this.agencyData.description;
      this.location = this.agencyData.location;
      this.ruc = this.agencyData.ruc;
      this.phoneNumber = this.agencyData.phoneNumber;
  }

  getImage(event: any): any {
      this.editedImage = event.target.files[0];
      this.convertImageToBase64();
  }

  convertImageToBase64(): void {
      let reader = new FileReader();
      reader.readAsDataURL(this.editedImage as Blob);
      reader.onloadend = () => {
          this.imageUrl = reader.result as string;
      }
  }

  OnlyNumbersAllowed(event: any):boolean {
      const charCode = (event.which)?event.which: event.keyCode;
      if(charCode > 31 && (charCode < 48 || charCode > 57)) { return false; }
      return true;
  }

  editMode() {
      this.isEditMode = true;
      this.imageUrl = this.agencyData.photo;
      this.editInitialization();
  }

  cancelEdit() {
      this.isEditMode = false;
  }

  updateAgencyInformation() {
      this.agenciesService.update(this.editData.id, this.editData).subscribe((response: any) => {
          this.agencyData = response;
          this.cancelEdit();
      });
  }

  onSubmit() {
      this.editData = this.agencyData;
      this.editData.photo = this.imageUrl;
      this.editData.description = this.description;
      this.editData.location = this.location;
      this.editData.ruc = this.ruc;
      this.editData.phoneNumber = this.phoneNumber;
      this.updateAgencyInformation();
  }

}
