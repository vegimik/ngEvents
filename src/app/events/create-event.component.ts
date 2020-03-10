import { Component, OnInit } from '@angular/core';
// import { FormsModule } from '@angular/forms';
import { Router} from '@angular/router';
import { EventService } from './shared/event.service';



@Component({
    // selector: 'app-name',
    templateUrl: './create-event.component.html',
    styles: [
    `
      em {
        float: right;
        color: E05C65;
        padding-left: 10px;
      }
      .error input {
        background-color: #e3c3c5;
      }
      .error :: -webkit-input-placeholder {
        color: #999;
      }
      .error :: -moz-placeholder {
        color: #999;
      }
      .error: -moz-placeholder {
        color: #999;
      }
      .error :: -ms-input-placeholder {
        color: #999;
      }
    `
  ]
})
export class CreateEventComponent implements OnInit {
    // newEvent
    // event: any
    name
    date
    time
    price
    address
    city
    country
    imageUrl
    onlineUrl

    isDirty: boolean = true
    constructor(private router: Router, private eventService:EventService) { }

    ngOnInit(): void {
      // this.event={
      //   name: 'vegimiit',
      //   date: '/8/8/2020',
      //   time: '10am',
      //   price: 799.99,
      //   location: {
      //     address: '12000  Islami',
      //     city: 'Fushe Kosove',
      //     country: 'Kosove'
      //   },
      //   onlineUrl: 'http://x1carbon.ml',
      //   imageUrl: 'https://pbs.twimg.com/profile_images/629906725194366976/URiDtww6_400x400.jpg',
      // }
    }


    saveEvent(formValues) {
      console.log(formValues)
      this.eventService.saveEvent(formValues)
      this.isDirty=false
      this.router.navigate(["/events"]);
    }

    cancel(){
        this.router.navigate(['/events'])
    }

 }
