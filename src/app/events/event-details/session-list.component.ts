import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { ISession } from '../shared/event.model';

@Component({
  selector: 'app-session-list',
  templateUrl: './session-list.component.html',
  // styleUrls: ['./name.component.scss']
})
export class SessionListComponent implements OnInit {
  @Input() sessions: ISession[] //when we want to present all data without filtering
  @Input() filterBy: string;
  @Input() sortBy: string;
  visibleSessions: ISession[]=[];


  constructor() { }

  ngOnInit(): void { }

  ngOnChanges() {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    if(this.sessions){
      this.filterSessions(this.filterBy);
      this.sortBy==='name'? this.visibleSessions.sort(sortByNameAsc)
      : this.visibleSessions.sort(sortByVotesDesc)
    }
  }

  filterSessions(filter){
    if(filter=='all'){
      this.visibleSessions=this.sessions.slice(0);
    }
    else{
      this.visibleSessions=this.sessions.filter(session   =>  {
        return session.level.toLocaleLowerCase()===filter;
      })


    }
  }

}


function sortByNameAsc(sc1: ISession, sc2: ISession){
  if(sc1.name> sc2.name) return 1
  else if(sc1.name===sc2.name) return 0
  else return -1
}

function sortByVotesDesc(sc1: ISession, sc2: ISession){
  return sc2.voters.length-sc1.voters.length
}
