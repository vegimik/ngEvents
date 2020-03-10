import { Component, OnInit } from '@angular/core';
import { EventService } from './shared/event.service';
import { toBase64String } from '@angular/compiler/src/output/source_map';
import { compileComponent } from '@angular/core/src/render3/jit/directive';
import { ToastrService } from '../common/toastr.service';
// import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';
import { THROW_IF_NOT_FOUND } from '@angular/core/src/di/injector';
import { IEvent } from './shared/index';

declare let toastr;
// selector: 'app-events-list',
@Component({
  // selector: 'app-events-list',
  template: `
  <div>
  <h1>Upcoming Angluar Events</h1>
  <hr />
  <h1>Angular Router</h1>
<nav>
  <a routerLink="/events" routerLinkActive="active">Events</a>
  <br/>
  <a routerLink="/pagenot found" routerLinkActive="active">Page not found</a>
  <br/>
  <a routerLink="/events/3" routerLinkActive="active">Event 3</a>
  <br/>
</nav>

  <br />
  <div class="well">
    <div>Hello World</div>
  </div>
  <!--<app-event-thumbnail #thumbnail [event]="event1"></app-event-thumbnail>-->
  <div class="row">
  <div class="col-md-5"  *ngFor="let event of events">
  <app-event-thumbnail (click)="handleThumbnailCLick(event.name)" [event]="event"></app-event-thumbnail>
  <div>
  </div>
  <!--<h3> {{thumbnail.someProperty}}</h3>--> 
  <button class="btn btn-primary" (click)="showSuccess()"> Log me some foo </button>

</div>
`
})


export class EventListComponent implements OnInit {
  events: IEvent[]
  constructor(private eventService: EventService, private route: ActivatedRoute){

  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    // this.events= 
    // this.eventService.getEvents().subscribe(events => {this.events=events})
    this.events=this.route.snapshot.data['events']
    
  }

  showSuccess() {
    // this.toastr.success('Hello world!', 'Toastr fun!');
  }

  handleThumbnailCLick(eventName){
    // this.toastr.success(eventName)
    console.log('toastr.success')

  }

}
