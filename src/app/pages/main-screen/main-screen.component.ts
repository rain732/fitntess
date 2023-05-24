import { Component } from '@angular/core';

@Component({
  selector: 'app-main-screen',
  templateUrl: './main-screen.component.html',
  styleUrls: ['./main-screen.component.css']
})
export class MainScreenComponent {

  activeDay: string = 'monday';

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
