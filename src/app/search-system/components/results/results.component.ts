import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Service} from "../../interfaces/service";
import {ServicesService} from "../../services/services.service";
import {Subscription} from "rxjs";
import {NavigationEnd, Router} from "@angular/router";

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit, OnDestroy {
    @Input() text: string = '';

    services!: Service[];
    servicesWithFilters: any = [];

    subscriber!: Subscription;

    constructor(private servicesService: ServicesService, private router: Router) { }

    ngOnInit(): void {
        this.getMatches();
        this.subscriber = this.router.events.subscribe((e: any) =>
        {
            if (e instanceof NavigationEnd) {
                this.getMatches();
            }
        });
    }

    async getMatches() {
        await new Promise(f => setTimeout(f, 100));
        this.servicesService.getAllByText(this.text).subscribe((response: any) => {
            this.services = response;
        })
    }

    getMatchesWithFilters(filter: any) {
        for (let i = 0; i < this.services.length; i++)
        {
            let cont = 0;
            let ok = 0;
            let service = this.services[i];

            //hasLowestPrice
            if (filter.lowestPrice != null) {
                cont++;
                if (service.isOffer == "1") {
                    if (parseFloat(service.newPrice) >= filter.lowestPrice) ok++;
                }
                else {
                    if (parseFloat(service.price) >= filter.lowestPrice) ok++;
                }
            }
            if (filter.highestPrice != null) {
                cont++;
                if (service.isOffer == "1") {
                    if (parseFloat(service.newPrice) <= filter.highestPrice) ok++;
                }
                else {
                    if (parseFloat(service.price) <= filter.highestPrice) ok++;
                }
            }
            if (filter.serviceStars != -1) {
                cont++;
                if (parseInt(service.score) >= filter.serviceStars) ok++;
            }
            //Implement agencyStars

            if (ok == cont) {
                this.servicesWithFilters.push(service);
            }
        }
        this.services = this.servicesWithFilters;
        this.servicesWithFilters = [];
    }

    ngOnDestroy() {
        if (this.subscriber) {
            this.subscriber.unsubscribe();
        }
    }

}
