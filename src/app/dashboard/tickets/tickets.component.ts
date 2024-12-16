import { Component } from '@angular/core';
import { DashboardItemComponent } from "../dashboard-item/dashboard-item.component";
import { NewTicketComponent } from "./new-ticket/new-ticket.component";

@Component({
    selector: 'app-tickets',
    imports: [DashboardItemComponent, NewTicketComponent],
    templateUrl: './tickets.component.html',
    styleUrl: './tickets.component.scss'
})
export class TicketsComponent {

}
