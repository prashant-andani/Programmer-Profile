import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, Routes, Resolve , ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

/** Components */
import { AppComponent } from './app.component';
import { GitHubComponent } from './components/github/github.component';
import { StackoverflowComponent } from './components/stackoverflow/stackoverflow.component';
import { GitBooksComponent } from './components/gitbooks/gitbooks.component';
import { HomeComponent } from './components/home/home.component';
import { CardsComponent } from './components/cards/cards.component';
import { CodepenComponent } from './components/codepen/codepen.component';

/** Services */
import { DataService } from './services/data.service';
import { GitHubService } from './services/github.service';
import { StackoverflowService } from './services/stackoverflow.service';
import { GitBooksService } from './services/gitbooks.service';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'cards',
    component: CardsComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    GitHubComponent,
    StackoverflowComponent,
    GitBooksComponent,
    HomeComponent,
    CardsComponent,
    CodepenComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [DataService, GitHubService, StackoverflowService, GitBooksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
