import { Component, OnInit } from '@angular/core';
import { EventService } from '../shared/event.service';
import { ActivatedRoute } from '@angular/router';
import { IEvent } from '../shared/index';
import { ISession } from '../shared/event.model';

@Component({
    // selector: 'app-name',
    templateUrl: './event-details.component.html',
    styles: [`
    .container { padding-left:20px;, padding-right: 20px;  }
    .event-image {height: 100px;}
    a { cursor: pointer;}
    `]
})
export class EventDetailsComponent {
    event: IEvent
    addMode: boolean
    filterBy: string="all";
    sortBy: string="votes";

    constructor(private eventService: EventService, private route: ActivatedRoute ) {
        // this.event=this.eventService.getEvent(1)

    }

    ngOnInit() {
        this.event=this.eventService.getEvent(+this.route.snapshot.params['id'])
        console.log(this.event)
    }

    addSession(){
      this.addMode=true
    }

    saveNewSession(session: ISession){
      const nextId=Math.max.apply(null, this.event.sessions.map(s => s.id))
      session.id=nextId+1
      this.event.sessions.push(session)
      this.eventService.updateEvent(this.event)
      this.addMode=false
    }

    cancelAddSession(session: ISession){
      this.addMode=false
      console.log(this.addMode)
      console.log(session +' sepse nuk kemi bere emit per te derguar te dhena te html faqja prind ')
    }



}
