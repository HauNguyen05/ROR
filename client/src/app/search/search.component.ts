import { Component, OnInit } from '@angular/core';
import {HeaderComponent} from '../header/header.component'; 
import { headersToString } from 'selenium-webdriver/http';
import { TestBed } from '@angular/core/testing';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  catogary:any[];
  header :HeaderComponent = new HeaderComponent();
  constructor() { }

  ngOnInit() {
    this.catogary = this.header.catogary 
  }
  books:any[]=[
    {title:"MySQL Bible", author:"Steve Suehring", content:"MySQL is the leading open source relational  ", image:"MySQL_Bible_8_17_2014_3_53_06_AM.jpg"},
    {title:"MySQL Bible", author:"Steve Suehring", content:"MySQL is the leading open source relational  ", image:"MySQL_Bible_8_17_2014_3_53_06_AM.jpg"},
    {title:"MySQL Bible", author:"Steve Suehring", content:"MySQL is the leading open source relational  ", image:"MySQL_Bible_8_17_2014_3_53_06_AM.jpg"}, 
  ]
  topbook:any[]=[
    {title:"Knowledge Management for Process, Organizational and Marketing Innovation: Tools and Methods (Premier Reference Source)", image:"Knowledge_Management_for_Proce_4_22_2013_9_26_01_AM.jpg"},
    {title:"Knowledge Management for Process, Organizational and Marketing Innovation: Tools and Methods (Premier Reference Source)", image:"Knowledge_Management_for_Proce_4_22_2013_9_26_01_AM.jpg"},
    {title:"Knowledge Management for Process, Organizational and Marketing Innovation: Tools and Methods (Premier Reference Source)", image:"Knowledge_Management_for_Proce_4_22_2013_9_26_01_AM.jpg"},

  ]
  
}
