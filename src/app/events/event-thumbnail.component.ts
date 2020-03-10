import { Component, Input, Output, EventEmitter } from '@angular/core';
import { getRenderedText } from '@angular/core/src/render3';
import { ReturnStatement } from '@angular/compiler';
import { IEvent } from './shared/index';


@Component({

    selector: 'app-event-thumbnail',
    template: `
    <div [routerLink]="['/events', event.id]" class="well hoverwell thumbnail">
    <h2>  {{event?.name | uppercase }}</h2>
    <div> Date: {{event?.date}} </div>

    <div class="well" [ngClass]="getStartTimeClass()" [ngSwitch]="event?.time">
    Time: {{event?.time}}
        <span  *ngSwitchCase="'8:00 am'"> Early Start </span>
        <span *ngSwitchCase="'10:00 am'"> Late Start </span>
        <span *ngSwitchDefault> Normal Start </span>
    </div>

    <div> Price: \${{event?.price}} </div>
    <div *ngIf="event?.location">
        <span>Location: {{event?.location.address}}</span>
        <span>&nbsp;</span>
        <span>{{event?.location.city}}, {{event?.location.country}}</span>
        <br/>
        <button class="btn btn-primary" (click)="handleClickMe()"> Click me! </button>
    </div>
    <div>
    Online URL: {{event?.onlineUrl}}
    </div>
</div>
    `,
    styles: [`
    .green { color: #003300 !impotant;}
    .bold { font-weight: bold; }
    .thumbnail { min-height: 210px;}
    .pad-left {margin-left: 10px;}
    .well div { color: #bbb;}
    `]


})

export class EventThumbnailComponent{
   @Input()  event:IEvent
   someProperty:any="some value"

   logFoo(){
       console.log('foo');
   }

   getStartTimeClass(){
       if(this.event&&this.event.time==='8:00 am')
        {
            return "green bold"
        }
       return ''
   }


//    @Output() eventClick=new EventEmitter()

//    handleClickMe(){
//     //    console.log("clicked!")
//     this.eventClick.emit('foo')
//    }

}
