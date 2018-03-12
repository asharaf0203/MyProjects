Post Installation Notes
=======================

You will need to complete the following steps to use the Crawford Shell angular package:

1) Install the SyncFusion libraries:

    - npm install @syncfusion/ej2-ng-grids@16.1.24 --save-dev
    - npm install @syncfusion/ej2-ng-inputs@16.1.24 --save-dev
    - npm install @syncfusion/ej2-ng-lists@16.1.24 --save-dev
    - npm install @syncfusion/ej2-ng-calendars@16.1.24 --save-dev
    - npm install @syncfusion/ej2-ng-dropdowns@16.1.24 --save-dev

2) Add the following CSS to you master styles file:

    html, body {
      width: 100%;
      height: 100%;
    }

3) Add "app-routing.module"
    - Add at least one route
    - Export the Angular "RouterModule"
    - Import "app-routing.module" into the "app.module" 

4) Import "ShellModule" from "crawford-shell" into the "app.module"

5) Replace all content in "app.component.html" with the code below

    <cco-shell></cco-shell>


6) To show route in the navigation menu add a "data" property to the route, eg:
   
      {
        path: 'Home',
        component: HomeComponent,
        data: { title: 'Menu Item 1', icon: 'fa fa-fw fa-tachometer' }
      }


Additional Information
======================

  Setting The Page Title
  ----------------------
  Each component can set the text for the page title and the buttons that are available on the right of the title bar
  
	1) Import the page title service and the page title model
  
			import { CrawfordPageTitleService } from 'crawford-shell';

	2) Add a private "CrawfordPageTitleService" to the constructor
	
			constructor(
				private pageTitleService: CrawfordPageTitleService
			) { }
  
  
  import { IPageTitle } from '../../../shell/page-title/model/page-title.model';



