// import { EventListComponent } from './events/events-list.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { EventsAppComponent } from './events-app.component';
// import { EventListComponent } from './events/events-list.component';
// import { EventThumbnailComponent } from './events/event-thumbnail.component';
import { NavBarComponent } from './nav/navbar.component';
// import { EventService } from './events/shared/event.service';
import { from } from 'rxjs';
// import { ToastrModule } from 'ngx-toastr';
import { ToastrService } from '../app/common/toastr.service';
import { CollapsibleWellComponent } from '../app/common/collapsible-well.component';
// import { EventDetailsComponent } from './events/event-details/event-details.component';
// import { appRoutes } from './router';
// import { RouterModule, Routes } from '@angular/router';
// import { appRoutes } from './router';

import {
  EventListComponent,
  EventThumbnailComponent,
  EventService,
  EventDetailsComponent,
  // CreateEventComponent,
  EventRouteActivator,
  EventListResolver,
  CreateSessionComponent,
  SessionListComponent,
  // DurationPipe,
} from './events/index';
import { PageNotFoundComponent } from '../app/pageNotFound.component';
import { CreateEventComponent } from './events/create-event.component';
import { Error404Component } from './404.components';
// import { EventRouteActivator } from './events/event-details/event-route-activator.service';
// import { EventListResolver } from './events/events-list.resolver.service';
import { UserModule } from './user/user.module';
import { AuthService } from './user/auth.service';
// import { Forms} from 'form'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { CreateSessionComponent } from './events/event-details/create-sessions.component';
import { DurationPipe } from './events/shared/duration.pipe';



@NgModule({
  declarations: [
    EventsAppComponent,
    EventListComponent,
    EventThumbnailComponent,
    NavBarComponent,
    EventDetailsComponent,
    PageNotFoundComponent,
    CreateEventComponent,
    Error404Component,
    CreateSessionComponent,
    SessionListComponent,
    CollapsibleWellComponent,
    DurationPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,

    // ToastrModule.forRoot() // ToastrModule added
    // RouterModule.forRoot(appRoutes),
    // RouterModule.forRoot(appRoutes)
  ],
  providers: [
    EventService,
    ToastrService,
    EventRouteActivator,
    EventListResolver,
    AuthService,
    {
      provide: 'canDeactivateCreateEvent',
      useValue: checkDirtyState
    }
  ],
  bootstrap: [EventsAppComponent]
})
export class AppModule {}

export function checkDirtyState(component: CreateEventComponent) {
  if (component.isDirty) {
      return window.confirm('You have not saved this event, do you really want  to cancel?');
    }
  return true;
}



// // import { EventListComponent } from './events/events-list.component';
// import { BrowserModule } from '@angular/platform-browser';
// import { NgModule } from '@angular/core';

// import { AppRoutingModule } from './app-routing.module';
// import { EventsAppComponent } from './events-app.component';
// // import { EventListComponent } from './events/events-list.component';
// // import { EventThumbnailComponent } from './events/event-thumbnail.component';
// import { NavBarComponent } from './nav/navbar.component';
// // import { EventService } from './events/shared/event.service';
// import { from } from 'rxjs';
// import { ToastrModule } from 'ngx-toastr';
// import { ToastrService } from '../app/common/toastr.service';
// // import { EventDetailsComponent } from './events/event-details/event-details.component';
// // import { appRoutes } from './router';
// // import { RouterModule, Routes } from '@angular/router';
// // import { appRoutes } from './router';s
// import {
//   EventListComponent,
//   EventThumbnailComponent,
//   EventService,
//   EventDetailsComponent,
//   CreateEventComponent,
//   EventRouteActivator,
//   EventListResolver

// } from './events/index';
// import { PageNotFoundComponent } from '../app/pageNotFound.component';
// // import { CreateEventComponent } from './events/create-event.component';
// import { Error404Component } from './404.components';
// // import { EventRouteActivator } from './events/event-details/event-route-activator.service';
// // import { EventListResolver } from './events/events-list.resolver.service';
// import { UserModule } from './user/user.module';



// @NgModule({
//   declarations: [
//     EventsAppComponent,
//     EventListComponent,
//     EventThumbnailComponent,
//     NavBarComponent,
//     EventDetailsComponent,
//     PageNotFoundComponent,
//     CreateEventComponent,
//     Error404Component,

//   ],
//   imports: [
//     BrowserModule,
//     AppRoutingModule,

//     // ToastrModule.forRoot() // ToastrModule added
//     // RouterModule.forRoot(appRoutes),
//     // RouterModule.forRoot(appRoutes)
//   ],
//   providers: [
//     EventService,
//     ToastrService,
//     EventRouteActivator,
//     EventListResolver,
//     {
//       provide: 'canDeactivateCreateEvent',
//       useValue: checkDirtyState
//     }
//   ],
//   bootstrap: [EventsAppComponent]
// })
// export class AppModule { }

// export function checkDirtyState(component: CreateEventComponent){
//   if(component.isDirty)
//     return window.confirm('You have not saved this event, do you really want  to cancel?')
//   return true
// }
