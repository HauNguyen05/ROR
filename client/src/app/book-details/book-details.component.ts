import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  detail:any[]=[
    {name:"Author", value:"Andrew Hudson"},
    {name:"Publisher", value:"SAMS publishing"},
    {name:"ISBN", value:"123456"},
    {name:"Format", value:"pdf "},
    {name:"Size", value:"15MB"},
    {name:"Language", value:"English"},
    {name:"Pages", value:"345"},
    {name:"Published", value:"2008"},
    {name:"View", value:"37"}
  ]
  bookTag:any[]=[
    "desktop", "format","install", "linux","mac","office","openoffice.org", "program","scripts","serve","sofware","upgrade"
  ]
}
