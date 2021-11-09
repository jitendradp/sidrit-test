import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  @Input() user:any;
  @Output() dispayUserList = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

}
