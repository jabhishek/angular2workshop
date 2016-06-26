import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES, Router, ActivatedRoute } from '@angular/router';
import { PlanetsService } from './planets.service';
import {Villain, Planet} from '../shared/models';

@Component({
    selector : 'planet-detail',
    template : `
    Detail of {{ id }}
    <p>
      Name {{ planet?.name }}
    </p>
    <p>
      Climate {{ planet?.climate }}
    </p>
    <div>
        <a [routerLink]="['/empire']">Home</a> 
    </div>
   `,
    directives : [ ROUTER_DIRECTIVES ]
})
export class PlanetDetailComponent implements OnInit {
    id:number;
    planet:Planet;

    constructor(
        private route:ActivatedRoute,
        private router:Router,
        private planetsService:PlanetsService
    ){

    }

    ngOnInit(){
        var me = this;
        this.route.params.subscribe(params => {
            let id = params['id']; // (+) converts string 'id' to a number
            me.id = id;
            this.planetsService.getPlanetDetail( me.id ).subscribe( planet => this.planet = planet );
        });

        // load item by id
    }
}