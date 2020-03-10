import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-collapsible-well',
  template: `
  <div (click)="toggleContent()" class="well pointable">
    <h4 >  <!-- class="well-title"-->
    <ng-content select=".title"><!-- select=".title" or select="[well-title]" --></ng-content>
    </h4>
    <ng-content *ngIf="visible" select=".body"><!-- select=".body" or select="[well-body]" --></ng-content>
  </div>
  `
})
export class CollapsibleWellComponent implements OnInit {
  // @Input() title: string
  visible: boolean=true

  constructor() { }

  ngOnInit(): void { }

  toggleContent(){
    this.visible=!this.visible
  }
}
