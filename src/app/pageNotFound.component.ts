import { Component, OnInit } from '@angular/core';

@Component({
    // selector: 'app-name',
    template: `
    <body>

	<div id="notfound">
		<div class="notfound">
			<div class="notfound-404">
				<h1>404</h1>
			</div>
			<h2>Oops! This Page Could Not Be Found</h2>
			<p>Sorry but the page you are looking for does not exist, have been removed. name changed or is temporarily unavailable</p>
			<a href="#">Go To Homepage</a>
		</div>
	</div>

</body>

    `
})
export class PageNotFoundComponent  {
    constructor() { }

    // ngOnInit(){
    //   //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //   //Add 'implements OnInit' to the class.
      
    // }
}
