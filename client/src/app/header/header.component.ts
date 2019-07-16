import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  Categories1: any[]=[
    {title:"Programming", href:"#", quantity:"4972"},
    {title:"Technology", href:"#", quantity:"4762"},
    {title:"Security", href:"#", quantity:"3164"},
    {title:"Java", href:"#", quantity:"2791"},
    {title:"Internet", href:"#", quantity:"2352"},
    {title:"Mobile", href:"#", quantity:"2179"},
    {title:"Windows", href:"#", quantity:"2089"},
    {title:"Algorithms", href:"#", quantity:"2057"},
    {title:"Networking", href:"#", quantity:"1462"},
    {title:"Graphics", href:"#", quantity:"1323"},
    {title:"Hardware", href:"#", quantity:"1292"},
    {title:".NET", href:"#", quantity:"1240"},
  ] 
  Categories2: any[]=[
    {title:"JavaScript", href:"#", quantity:"1175"},
    {title:"Databases", href:"#", quantity:"1147"},
    {title:"Computers", href:"#", quantity:"940"}, 
    {title:"Linux", href:"#", quantity:"936"}, 
    {title:"Animation", href:"#", quantity:"857"},
    {title:"Application Development", href:"#", quantity:"686"},
    {title:"Servers", href:"#", quantity:"618"},
    {title:"Web Development", href:"#", quantity:"572"},
    {title:"Creative", href:"#", quantity:"566"},
    {title:"Certification", href:"#", quantity:"536"},
    {title:"Flash", href:"#", quantity:"527"},
    {title:"Robotics", href:"#", quantity:"514"},
  ] 
  tags1:any[]=[
    {title:"os", href:"#", quantity:"17705"},
    {title:"app", href:"#", quantity:"16530"},   
    {title:"application", href:"#", quantity:"10719"}, 
    {title:"gui", href:"#", quantity:"9293"}, 
    {title:"ems", href:"#", quantity:"8970"},
    {title:"go", href:"#", quantity:"8397"},
    {title:"design", href:"#", quantity:"8370"},
    {title:"format", href:"#", quantity:"7690"},
    {title:"program", href:"#", quantity:"7610"},
    {title:"data", href:"#", quantity:"7395"},
    {title:"iq", href:"#", quantity:"7370"},
    {title:"tool", href:"#", quantity:"6487"},
  ]
  tags2:any[]=[
    {title:"systems", href:"#", quantity:"6181"},
    {title:"computer", href:"#", quantity:"5810"},   
    {title:"search", href:"#", quantity:"5481"}, 
    {title:"software", href:"#", quantity:"4967"}, 
    {title:"bot", href:"#", quantity:"4599"},
    {title:"code", href:"#", quantity:"4588"},
    {title:"developer", href:"#", quantity:"4445"},
    {title:"edge", href:"#", quantity:"4400"},
    {title:"language", href:"#", quantity:"4180"},
    {title:"technology", href:"#", quantity:"3890"},
    {title:"car", href:"#", quantity:"3534"},
    {title:"project", href:"#", quantity:"3399"}, 
  ]
  tags3:any[]=[
    {title:"function", href:"#", quantity:"3052"},
    {title:"business", href:"#", quantity:"2943"},   
    {title:"java", href:"#", quantity:"2791"}, 
    {title:"framework", href:"#", quantity:"2790"}, 
    {title:"communication", href:"#", quantity:"2759"},
    {title:"mac", href:"#", quantity:"2747"},
    {title:"resource", href:"#", quantity:"2707"},
    {title:"server", href:"#", quantity:"2651"},
    {title:"platform", href:"#", quantity:"2554"},
    {title:"microsoft", href:"#", quantity:"2526"},
    {title:"networks", href:"#", quantity:"2508"},
    {title:"database", href:"#", quantity:"2508"}, 
  ]
  tags4:any[]=[
    {title:"internet", href:"#", quantity:"2352"},
    {title:"intel", href:"#", quantity:"2306"},   
    {title:"interface", href:"#", quantity:"2253"}, 
    {title:"press", href:"#", quantity:"2243"}, 
    {title:"update", href:"#", quantity:"2239"},
    {title:"case", href:"#", quantity:"2210"},
    {title:"logic", href:"#", quantity:"2188"},
    {title:"git", href:"#", quantity:"2102"},
    {title:"windows", href:"#", quantity:"2089"},
    {title:"programmer", href:"#", quantity:"1978"},
    {title:"deploy", href:"#", quantity:"1941"},
    {title:"dom", href:"#", quantity:"1889"}, 
  ]
}
