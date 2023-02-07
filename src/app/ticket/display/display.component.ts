import {Component, OnInit} from '@angular/core';
import {ServicesService} from "../shared/services/service/services.service";
import {TicketService} from "../shared/services/ticket/ticket.service";
import {interval, map, Observable, Subject, Subscription, switchMap} from "rxjs";
import {ITickets} from "../shared/model/tickets";
import {WebSocketSubject} from "rxjs/internal/observable/dom/WebSocketSubject";
import {  Router,ActivatedRoute } from '@angular/router';
import { CaissierService } from 'src/app/admin/shared/services/caisse/caissier.service';
import { ICaissier } from 'src/app/admin/shared/model/caissier';
import { ConnexionComponent } from 'src/app/admin/component/connexion/connexion.component';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnInit{
  subscription!: Subscription;
  private socket$!: WebSocketSubject<any>;
  tickets:any=[];
  ticketsE:any=[];

  ticketSubscribe:any;
  caissier:any=[];

  ticketP$!:Observable<ITickets>;
  nomAcces!:string;
  last!:any;

  constructor(private ticketService:TicketService,private activatedRoute:ActivatedRoute,private caissierService:CaissierService) {
  }
  public ngOnInit(){

    let nomAcces ='';
    // if(this.activatedRoute.snapshot.params['nomAcces']){
    //   nomAcces = this.activatedRoute.snapshot.params['nomAcces'];
    // if(nomAcces !== ''){
    //   this.caissierService.loadLog(nomAcces).subscribe(
    //     res =>{
    //       this.caissier = res
    //       console.log(this.caissier);
          
    //     });
    // }
  // }

  console.log(this.caissierService.getCaissier().subscribe(
    nomAcces =>{
      this.nomAcces = nomAcces;
    }
  ))

  

    // this.subscription = this.log.loginId$.subscribe(
    //   nomAcces =>
    //   {
    //     this.nomAcces = nomAcces;
    //     console.log(this.nomAcces);
    //   }
    // )
    // this.getT();
    // this.ticketService.ticket$.subscribe(tickets=>{
    //   this.tickets.push(tickets)
    // })
    interval(1000)
      .pipe(
        switchMap(() => this.ticketService.getAllTicket()),
        map((tickets) => tickets))
      .subscribe((tickets) => {
        this.tickets = tickets;
      });

      // interval(1000)
      // .pipe(
      //   switchMap(() => this.ticketService.getTicketE(nomAcces)),
      //   map((ticketsE) => ticketsE))
      // .subscribe((ticketsE) => {
      //   this.ticketsE = ticketsE;
      // });

      
     this.last=this.activatedRoute.snapshot.queryParams['nomAcces'];
      console.log(this.last);
       


  }


  public getT(){
    this.ticketSubscribe = this.ticketService.getTicketE(this.activatedRoute.snapshot.queryParams['nomAcces']).subscribe(
      res=>{
        this.ticketsE = res;
      }
    )
  }

 






}
