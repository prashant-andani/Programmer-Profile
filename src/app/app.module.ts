import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

/** Components */
import { AppComponent } from './app.component';
import { GitHubComponent } from './components/github/github.component';
import { StackoverflowComponent } from './components/stackoverflow/stackoverflow.component';
import { GitBooksComponent } from './components/gitbooks/gitbooks.component';

/** Services */
import { DataService } from './services/data.service';
import { GitHubService } from './services/github.service';
import { StackoverflowService } from './services/stackoverflow.service';
import { GitBooksService } from './services/gitbooks.service';

@NgModule({
  declarations: [
    AppComponent,
    GitHubComponent,
    StackoverflowComponent,
    GitBooksComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot()
  ],
  providers: [DataService, GitHubService, StackoverflowService, GitBooksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
