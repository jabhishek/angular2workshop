import { Injectable } from '@angular/core';
import { Observable }     from 'rxjs/Observable';
import { Planet } from '../shared/models';
import { BaseClient } from '../shared/base-client.service';
import { Http, Response } from '@angular/http';

@Injectable()
export class PlanetsService {
    planets:Array<Planet>;
    
    constructor(private baseClient:BaseClient){
        
    }

    getPlanetDetail(id:number): Observable<Planet> {
        //http://swapi.co/api/people/4/
        return this.baseClient.get(`/planets/${id}`)
            .map((response:Response) => {
                let body = response.json();
                return body;
            })
    }

    getPlanets():Observable<Planet[]> {
        var me = this;
        
        return this.baseClient
        .get( '/planets' )
        .map((response:Response) => {
            let body = response.json();
            me.planets = body.results;
            return body.results;
        });
    }
}

