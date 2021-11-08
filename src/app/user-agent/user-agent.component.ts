import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-agent',
  templateUrl: './user-agent.component.html',
  styleUrls: ['./user-agent.component.css']
})
export class UserAgentComponent implements OnInit {

  @Input() user: any;
  constructor() { }

  ngOnInit(): void {
  }

}
