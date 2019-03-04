import { Component, OnInit, ViewChild } from '@angular/core';
import {ContainerComponent} from "../container/container.component";
import {CommonService} from "../common.service";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @ViewChild(ContainerComponent)container:ContainerComponent;
  helpCount : number = 20;
  status : any = {
    sidebarmenu : false,
    gamestart: false
  }
  gameTime: any = {
    interval:null,
    time: 0,
    show:''
  }
  howToPlaymodalDismiss:boolean = false;
  constructor(private cService:CommonService) { }

  ngOnInit() {
    this.cService.gameEnd.subscribe((status)=>{
      if (status) {
      this.timer(true);
    }
    });
  }
  toggleMenu() {
    this.status.sidebarmenu = (this.status.sidebarmenu == true)?false:true;
  }
  timer(stop:boolean = false) {
    if (stop === true && this.gameTime.interval != null) {
     clearInterval(this.gameTime.interval);
    } else {
      this.gameTime.interval = setInterval(()=>{
        this.gameTime.time += 1;
        let min = Math.floor(this.gameTime.time/60);
        let sec = this.gameTime.time - (min*60);
        this.gameTime.show =  ((min<10)?'0'+min:min) + ':' +  ((sec<10)?'0'+sec:sec);
      },1000);
    }
  }
  startGameAction(type:string) {
    switch(type) {
      case "r":
      this.container.regenerateCells();
      break;
      case "s":
      this.container.startGame();
      this.status.gamestart = true;
      this.gameTime.time = 0;
      this.gameTime.show = '';
      this.toggleMenu();
      this.timer();
      break;
    }
  }
  changeMode(mode:string) {
    this.container.changeMode(mode);
  }
  helpGame() {
    this.helpCount = this.container.helpGame();
  }
  quitGameAction() {
    this.status.gamestart =  this.container.quitGame();
  }

}
