import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface MenuItem{
  label:string;
  icon: string;
  route:string;
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent implements OnInit {

  menuItems: MenuItem[] = [
    {
      label: 'Inicio',
      icon: 'home',
      route: '/home'
    },
    {
      label: 'Clientes',
      icon: 'groups',
      route: '/clients'
    },
  ]

  constructor(private route:Router) { }

  ngOnInit(): void {
  }

  redirectTo(route:string){
    this.route.navigate([route]);
  }

}
