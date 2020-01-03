import { Component, OnInit } from '@angular/core';
import {Router}  from '@angular/router';


@Component({
  selector: 'app-cardview',
  templateUrl: './cardview.component.html',
  styleUrls: ['./cardview.component.css']
})
export class CardviewComponent implements OnInit {
  public myAntomy=[  
{title:'Candidate',desc:'Here you can update selected candidate',image_cardview:'https://image.freepik.com/free-vector/candidate-selection_23-2147502238.jpg',alttext:'xyz',pageName:'candidate'}, 
{title:'Processes',desc:'Here you can update selected candidate',image_cardview:'https://image.freepik.com/free-vector/graphic-design-creative-process-concept_23-2148109606.jpg',alttext:'xyz',pageName:'process'},
{title:'Panel Member',desc:'Here you can update selected candidate',image_cardview:'https://image.freepik.com/free-vector/businesspeople-working-together_23-2147571067.jpg',alttext:'xyz',pageName:'panel'},		
{title:'Status',desc:'Here you can update selected candidate',image_cardview:'https://image.freepik.com/free-vector/file-searching-concept-illustration_23-2148281792.jpg',alttext:'xyz',pageName:'status'},		
]  
  constructor(private router: Router) { }

  ngOnInit() {
  }

  redirectPage(){
    this.router.navigate(['employeeList']);
  }

}
