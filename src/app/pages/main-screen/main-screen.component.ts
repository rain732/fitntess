import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-main-screen',
  templateUrl: './main-screen.component.html',
  styleUrls: ['./main-screen.component.css']
})
export class MainScreenComponent {
  @ViewChild('schedule', { read: ElementRef }) scheduleSection!: ElementRef;

  ngAfterViewInit() {
    console.log(this.scheduleSection);
  }

  scrollToElement() {
    this.scheduleSection.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }
  constructor(private elementRef: ElementRef) {}

  scrollToBottom(className:string): void {
    this.paymentOpen = true;
    this.elementRef.nativeElement.ownerDocument.documentElement.scrollTop = this.elementRef.nativeElement.ownerDocument.documentElement.scrollHeight;
    this.coachName = className;
  }
  activeDay: string = 'monday';
  paymentOpen: Boolean = false;
  showTimes: Boolean = false;
  coachName: string = "";
  selectedTime: string = "";
  onSubmit(selectedTime:any) {
    console.log(selectedTime);
    this.selectedTime=selectedTime;
    this.paymentOpen = true;
  }
  showForm(coachName:any){
    this.coachName = coachName;
    this.showTimes = !this.showTimes;
  }
  times: any =
    {
      monday: [
        {
          name: 'BODYPUMP',
          fromTime: '7:00AM - 8:30AM',
          toTime: '11:00PM - 12:30PM',
          tranie: 'Bret D. Bowers'
        },
        {
          name: 'BODYCOMBAT',
          fromTime: '9:00AM - 10:30AM',
          toTime: '1:00PM - 2:30PM',
          tranie: 'Hector T. Daigl'
        }, {
          name: 'BODYBALANCE',
          fromTime: '3:00PM - 4:30PM',
          toTime: '5:00PM - 6:30PM',
          tranie: 'William G. Stewart'
        }, {
          name: 'BODYATTACK',
          fromTime: '7:00PM - 8:30PM',
          toTime: '9:00PM - 10:30PM',
          tranie: 'William G. Stewart'
        }
      ],

      tuesday: [
        {
          name: 'BODYPUMP',
          fromTime: '7:00AM - 8:30AM',
          toTime: '11:00PM - 12:30PM',
          tranie: 'Bret D. Bowers'
        },
        {
          name: 'BODYCOMBAT',
          fromTime: '9:00AM - 10:30AM',
          toTime: '1:00PM - 2:30PM',
          tranie: 'Hector T. Daigl'
        }, {
          name: 'BODYBALANCE',
          fromTime: '3:00PM - 4:30PM',
          toTime: '5:00PM - 6:30PM',
          tranie: 'William G. Stewart'
        }, {
          name: 'BODYATTACK',
          fromTime: '7:00PM - 8:30PM',
          toTime: '9:00PM - 10:30PM',
          tranie: 'William G. Stewart'
        }
      ],
      wednesday: [
        {
          name: 'BODYPUMP',
          fromTime: '7:00AM - 8:30AM',
          toTime: '11:00PM - 12:30PM',
          tranie: 'Bret D. Bowers'
        },
        {
          name: 'BODYCOMBAT',
          fromTime: '9:00AM - 10:30AM',
          toTime: '1:00PM - 2:30PM',
          tranie: 'Hector T. Daigl'
        }, {
          name: 'BODYBALANCE',
          fromTime: '3:00PM - 4:30PM',
          toTime: '5:00PM - 6:30PM',
          tranie: 'William G. Stewart'
        }, {
          name: 'BODYATTACK',
          fromTime: '7:00PM - 8:30PM',
          toTime: '9:00PM - 10:30PM',
          tranie: 'William G. Stewart'
        }
      ]
      ,
      thursday: [
        {
          name: 'BODYPUMP',
          fromTime: '7:00AM - 8:30AM',
          toTime: '11:00PM - 12:30PM',
          tranie: 'Bret D. Bowers'
        },
        {
          name: 'BODYCOMBAT',
          fromTime: '9:00AM - 10:30AM',
          toTime: '1:00PM - 2:30PM',
          tranie: 'Hector T. Daigl'
        }, {
          name: 'BODYBALANCE',
          fromTime: '3:00PM - 4:30PM',
          toTime: '5:00PM - 6:30PM',
          tranie: 'William G. Stewart'
        }, {
          name: 'BODYATTACK',
          fromTime: '7:00PM - 8:30PM',
          toTime: '9:00PM - 10:30PM',
          tranie: 'William G. Stewart'
        }
      ],
      friday: [
        {
          name: 'BODYPUMP',
          fromTime: '7:00AM - 8:30AM',
          toTime: '11:00PM - 12:30PM',
          tranie: 'Bret D. Bowers'
        },
        {
          name: 'BODYCOMBAT',
          fromTime: '9:00AM - 10:30AM',
          toTime: '1:00PM - 2:30PM',
          tranie: 'Hector T. Daigl'
        }, {
          name: 'BODYBALANCE',
          fromTime: '3:00PM - 4:30PM',
          toTime: '5:00PM - 6:30PM',
          tranie: 'William G. Stewart'
        }, {
          name: 'BODYATTACK',
          fromTime: '7:00PM - 8:30PM',
          toTime: '9:00PM - 10:30PM',
          tranie: 'William G. Stewart'
        }
      ]

    };



  onDateChange(day: string) {
    this.activeDay = day;
  }

}
