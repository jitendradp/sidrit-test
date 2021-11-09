import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs/operators';
import { ConnectService } from '../services/connect.service';

@Component({
  selector: 'app-connect-call',
  templateUrl: './connect-call.component.html',
  styleUrls: ['./connect-call.component.css']
})
export class ConnectCallComponent implements OnInit {

  currentcallStatus = CallStatus.Initial;
  CallStatus = CallStatus;
  users:any;
  constructor(private connectService: ConnectService) { }

  ngOnInit(): void {
  }

  connectAgent(){
    this.currentcallStatus = CallStatus.Connecting;
    this.connectService.connectUser().pipe(tap(()=>{
      this.currentcallStatus = CallStatus.Connected;
    })).subscribe((users)=>{
      this.users = users;
    }, error =>{
      this.currentcallStatus = CallStatus.Failed;
    });
  }

}

export enum CallStatus {
  Initial = 1,
  Connecting,
  Connected,
  Failed,
}
