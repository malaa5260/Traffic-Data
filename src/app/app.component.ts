import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { ServerStatusComponent } from "./dashboard/server-status/server-status.component";
import { TrafficComponent } from "./dashboard/traffic/traffic.component";
import { TicketsComponent } from "./dashboard/tickets/tickets.component";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    imports: [HeaderComponent, ServerStatusComponent, TrafficComponent, TicketsComponent]
})
export class AppComponent {
  title = 'traffic-data';

}
