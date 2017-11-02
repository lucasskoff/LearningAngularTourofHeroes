import { NgModule            } from '@angular/core';
import { BrowserModule       } from '@angular/platform-browser';
import { FormsModule         } from '@angular/forms';
import { RouterModule        } from '@angular/router';

import { HeroesComponent     } from './heroes.component';
import { AppComponent        } from './app.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroService         } from './hero.service';
import { DashboardComponent  } from './dashboard.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: 'heroes',
        component: HeroesComponent
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
      }
    ])],
  declarations: [ AppComponent, DashboardComponent, HeroesComponent, HeroDetailComponent ],
  bootstrap:    [ AppComponent ],
  providers:    [ HeroService ]
})
export class AppModule { }
