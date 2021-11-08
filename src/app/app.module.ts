import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { VideoChatComponent } from './videochat/videochat.component';
import {RouterModule, Routes} from "@angular/router";
import { ConnectingComponent } from './connecting/connecting.component';
import { NoAvailableAgentComponent } from './no-available-agent/no-available-agent.component';
import { StartConsultationComponent } from './start-consultation/start-consultation.component';
import { ConnectCallComponent } from './connect-call/connect-call.component';
import { HttpClientModule } from '@angular/common/http';
import { UserAgentComponent } from './user-agent/user-agent.component';

const routes: Routes = [
  {path: '' , redirectTo:'connect-call', pathMatch: 'full'},
  {path: 'no-available-agent', component: NoAvailableAgentComponent},
  {path: 'start-consultation', component: StartConsultationComponent},
  {path: 'connecting', component: ConnectingComponent},
  {path: 'videochat', component: VideoChatComponent},
  {path: 'connect-call', component: ConnectCallComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    NoAvailableAgentComponent,
    StartConsultationComponent,
    ConnectingComponent,
    VideoChatComponent,
    ConnectCallComponent,
    UserAgentComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
