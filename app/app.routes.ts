import { provideRouter, RouterConfig } from '@angular/router';

import { RebelAllianceComponent } from './components/rebel-alliance/rebel-alliance.component';
import { EmpireComponent } from './components/empire/empire.component';
import { EmpireDetailComponent } from './components/empire/empire-detail.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { PlanetDetailComponent } from './components/planets/planet-detail.component';

export const routes: RouterConfig = [
  {
    path: 'rebels',
    
    component: RebelAllianceComponent,
  },
  {
    path: 'empire',
  
    component: EmpireComponent
  },
  {
      path : 'empire/:id',
     
      component: EmpireDetailComponent
  },
  {
      path : 'planet/:id',

      component: PlanetDetailComponent
  },
  {
    path: 'home',
   
    component: HomeComponent
  },
  {
      path: 'login',
     
      component : LoginComponent
  }
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
