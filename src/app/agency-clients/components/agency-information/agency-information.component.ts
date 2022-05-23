import {Component, OnInit, ViewChild} from '@angular/core';
import { AgenciesService } from "../../services/agencies.service";
import { Agency } from "../../interfaces/agency";
import {FormBuilder, FormGroup} from "@angular/forms";
import * as _ from 'lodash';

@Component({
  selector: 'app-agency-information',
  templateUrl: './agency-information.component.html',
  styleUrls: ['./agency-information.component.css']
})
export class AgencyInformationComponent implements OnInit {

  @ViewChild('agencyInformationForm', {static: false})
  agencyInformationForm!: FormGroup;

  constructor(private agenciesService: AgenciesService, private readonly fb: FormBuilder) { }

  agencyData!: Agency;
  isEditMode = false;
  editData!: Agency;

  ngOnInit(): void {
      this.getAgencyData("a1");
  }

  getAgencyData(id: string) {
      this.agenciesService.getById(id).subscribe((response: any) => {
          this.agencyData = response;
      })
  }

  formInitialization() {
      this.agencyInformationForm = this.fb.group({
          description: [''],
          location: [''],
          ruc: [''],
          phoneNumber: ['']
      })
      this.agencyInformationForm.patchValue(this.agencyData);
  }

  OnlyNumbersAllowed(event: any):boolean {
      const charCode = (event.which)?event.which: event.keyCode;
      if(charCode > 31 && (charCode < 48 || charCode > 57)) { return false; }
      return true;
  }

  editMode() {
      this.isEditMode = true;
      this.formInitialization();
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
      this.editData.description = this.agencyInformationForm.value.description;
      this.editData.location = this.agencyInformationForm.value.location;
      this.editData.ruc = this.agencyInformationForm.value.ruc;
      this.editData.phoneNumber = this.agencyInformationForm.value.phoneNumber;
      this.updateAgencyInformation();
  }

}
