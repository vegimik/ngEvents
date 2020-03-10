import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { EventListComponent } from './events/events-list.component';
// import { EventDetailsComponent } from './events/event-details/event-details.component';
import { PageNotFoundComponent } from '../app/pageNotFound.component';
// import { CreateEventComponent } from './events/create-event.component';
import { Error404Component } from './404.components';
// import { EventRouteActivator } from './events/event-details/event-route-activator.service';
import { CanDeactivate } from '@angular/router/src/utils/preactivation';
// import { EventListResolver } from './events/events-list.resolver.service';
import { UserModule } from './user/user.module';

import {
  EventListComponent,
  EventDetailsComponent,
  CreateEventComponent,
  EventRouteActivator,
  EventListResolver

} from './events/index';
import { from } from 'rxjs';
import { CreateSessionComponent } from './events/event-details/create-sessions.component';

const routes: Routes = [
  { path: 'events', component: EventListComponent, resolve: {events: EventListResolver} },
    { path: 'events/:id', component: EventDetailsComponent, canActivate: [EventRouteActivator]},
    { path: 'events/session/new', component: CreateSessionComponent},
    { path: 'event/new', component: CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent']},
    { path: 'user', loadChildren: './user/user.module#UserModule'},
    { path: '', redirectTo: '/events', pathMatch: 'full'},
    { path: '**', component: Error404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }





// import { NgModule } from '@angular/core';
// import { Routes, RouterModule } from '@angular/router';
// // import { EventListComponent } from './events/events-list.component';
// // import { EventDetailsComponent } from './events/event-details/event-details.component';
// import { PageNotFoundComponent } from '../app/pageNotFound.component';
// // import { CreateEventComponent } from './events/create-event.component';
// import { Error404Component } from './404.components';
// // import { EventRouteActivator } from './events/event-details/event-route-activator.service';
// import { CanDeactivate } from '@angular/router/src/utils/preactivation';
// // import { EventListResolver } from './events/events-list.resolver.service';
// import { UserModule } from './user/user.module';

// import {
//   EventListComponent,
//   EventDetailsComponent,
//   CreateEventComponent,
//   EventRouteActivator,
//   EventListResolver

// } from './events/index';
// import { from } from 'rxjs';

// const routes: Routes = [
//   { path: 'events', component: EventListComponent, resolve: {events: EventListResolver} },
//     { path: 'events/:id', component: EventDetailsComponent, canActivate: [EventRouteActivator]},
//     { path: 'event/new', component: CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent']},
//     { path: 'user', loadChildren: './user/user.module#UserModule'},
//     { path: '', redirectTo: '/events', pathMatch: 'full'},
//     { path: '**', component: Error404Component}
// ];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }
