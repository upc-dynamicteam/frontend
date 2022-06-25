import {Component, Input} from '@angular/core';
import {Router} from "@angular/router";
@Component({
  selector: 'app-services-list',
  templateUrl: './services-list.component.html',
  styleUrls: ['./services-list.component.css']
})
export class ServicesListComponent{
    @Input()
    listServices: any = []
    constructor( private router: Router){

    }
    ngOnInit(): void{
    }
    goToService(id: string) {
        this.router.navigate([`service/${id}`]);
    }
}
