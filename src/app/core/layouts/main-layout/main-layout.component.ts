import { Component, HostListener } from '@angular/core';
import { NavbarComponent } from "../../../shared/components/navbar/navbar.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-main-layout',
  imports: [NavbarComponent,RouterOutlet],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.css'
})
export class MainLayoutComponent {


  goTop(){
    // scrollTo(0,0);
    window.scrollTo({top: 0, behavior: 'smooth'});
  }

  showBtn : boolean = false;
  @HostListener ('window:scroll') scrollTop(){
    if (window.scrollY > 500) {
      this.showBtn = true;
    }else{
      this.showBtn = false;
    }
  }

}
