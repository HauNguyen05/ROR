import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { href:"#"}

  ngOnInit() {
  }
  key:any[]=[
    {name:"JavaScript",href:"#"},
    {name:"Swift", href:"#"},
    {name:"Java", href:"#"},
    {name:"Python", href:"#"},
    {name:"AngularJS", href:"#"},
    {name:"NodeJS", href:"#"},
    {name:"React", href:"#"},
    {name:"Big Data", href:"#"},
    {name:"IoT", href:"#"},
    {name:"Blockchain", href:"#"},
    {name:"Artificial Intelligence", href:"#"},
    {name:"Robotic", href:"#"},
    {name:"Virtual Reality", href:"#"},
  ]
}
