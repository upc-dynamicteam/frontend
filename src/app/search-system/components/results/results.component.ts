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
    beforeText!: string;
    services!: Service[];
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

    ngOnDestroy() {
        if (this.subscriber) {
            this.subscriber.unsubscribe();
        }
    }

}
