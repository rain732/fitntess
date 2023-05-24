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

  ngOnInit(): void {
    
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
}

