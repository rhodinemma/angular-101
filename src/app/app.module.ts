import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BugService } from './shared/bug.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddIssueComponent } from './components/add-issue/add-issue.component';
import { EditIssueComponent } from './components/edit-issue/edit-issue.component';
import { IssueListComponent } from './components/issue-list/issue-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AddIssueComponent,
    EditIssueComponent,
    IssueListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [BugService],
  bootstrap: [AppComponent]
})
export class AppModule { }
