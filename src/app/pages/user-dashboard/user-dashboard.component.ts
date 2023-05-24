import { Component } from '@angular/core';

interface Plan {
  range: string;
  description: string;
  diet: Diet[];
}

interface Diet {
  meal: string;
  description: string;
}

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent {
  userInfo: any = [
    {
      age: localStorage.getItem("age"),
      weight: localStorage.getItem("weight"),
      height: localStorage.getItem("height"),
      gender: localStorage.getItem("gender"),
      bmi: this.calculateBMI(parseFloat(localStorage.getItem("weight")?.toString() ?? "0"), parseFloat(localStorage.getItem("height")?.toString() ?? "0")),
      plan: '',
      diet: []
    }
  ];

  plans: Plan[] = [
    {
      range: '< 18.5',
      description: 'Underweight',
      diet: [
        { meal: 'Breakfast', description: 'Include healthy fats and proteins.' },
        { meal: 'Lunch', description: 'Focus on nutrient-dense foods like whole grains, lean proteins, and fruits/vegetables.' },
        { meal: 'Dinner', description: 'Include a balanced mix of proteins, carbohydrates, and healthy fats.' }
      ]
    },
    {
      range: '18.5 - 24.9',
      description: 'Normal Weight',
      diet: [
        { meal: 'Breakfast', description: 'Include a good source of protein, whole grains, and fruits/vegetables.' },
        { meal: 'Lunch', description: 'Choose lean proteins, whole grains, and a variety of colorful vegetables.' },
        { meal: 'Dinner', description: 'Focus on lean proteins, whole grains, and a mix of vegetables.' }
      ]
    },
    {
      range: '>= 25',
      description: 'Overweight',
      diet: [
        { meal: 'Breakfast', description: 'Choose high-fiber foods, lean proteins, and limit added sugars.' },
        { meal: 'Lunch', description: 'Include plenty of vegetables, lean proteins, and whole grains.' },
        { meal: 'Dinner', description: 'Opt for lean proteins, non-starchy vegetables, and controlled portion sizes.' }
      ]
    }
  ];

  calculateBMI(weight: number, height: number): number {
    // Convert height to meters
    const heightInMeters = height / 100;

    // Calculate BMI
    const bmi = weight / (heightInMeters * heightInMeters);

    // Round BMI to two decimal places
    const roundedBMI = Math.round(bmi * 100) / 100;

    return roundedBMI;
  }

  getPlan(bmi: number): string {
    if (bmi < 18.5) {
      return 'Underweight';
    } else if (bmi >= 18.5 && bmi < 25) {
      return 'Normal Weight';
    } else {
      return 'Overweight';
    }
  }

  getDiet(plann: string): Diet[] {
    const matchedPlan = this.plans.find(plan => {
      if(plan.description === plann)return plan;
      return;
    });

    return matchedPlan ? matchedPlan.diet : [];
  }

  ngOnInit() {
    const bmi = this.userInfo[0].bmi;
    console.log(this.userInfo[0]);
    
    this.userInfo[0].plan = this.getPlan(bmi);
    this.userInfo[0].diet = this.getDiet(this.userInfo[0].plan);
  }
}
