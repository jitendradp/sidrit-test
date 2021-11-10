import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-agent-details',
  templateUrl: './user-agent-details.component.html',
  styleUrls: ['./user-agent-details.component.css']
})
export class UserAgentDetailsComponent implements OnInit {

  @Input() userAgent: any;
  constructor() { }

  ngOnInit(): void {
  }

}
