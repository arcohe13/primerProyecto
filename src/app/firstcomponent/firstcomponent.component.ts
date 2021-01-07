

import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, OnInit } from '@angular/core';
import { title } from 'process';
import { FirstservicioService } from '../firstservicio.service';

@Component({
  selector: 'app-firstcomponent',
  templateUrl: './firstcomponent.component.html',
  styleUrls: ['./firstcomponent.component.css']
})
export class FirstcomponentComponent implements OnInit {

  constructor(private service:FirstservicioService) { 
   var  men = 'fsdfsdf';
    
  }

  ngOnInit(): void {
    this.service;
  }

}
