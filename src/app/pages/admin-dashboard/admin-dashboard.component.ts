import { Component, OnInit } from '@angular/core';
import { HostListener } from '@angular/core';
@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit{
  
  firstName: string | undefined = '';
  lastName: string | undefined;
  isSidebarVisible: boolean | undefined;
  isActiveDashBoard: number = 0;


  ngOnInit(): void {
    this.isActiveDashBoard = 1;
  }
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    if (window.innerWidth >= 768) {
      this.isSidebarVisible = true;
    } else {
      this.isSidebarVisible = false;
    }
  }

  toggleSidebar() {
    this.isSidebarVisible = !this.isSidebarVisible;
  }

  openSideBarItem(item: number){
    switch (item) {
      case 1:
        this.isActiveDashBoard = 1;
        break;
      case 2:
        this.isActiveDashBoard = 2;
        break;
      case 3:
        this.isActiveDashBoard = 3;
        break;
      default:
        this.isActiveDashBoard = 1;
    }
  }
}

