import { Component } from '@angular/core';

@Component({
  selector: 'app-bmi-cal',
  templateUrl: './bmi-cal.component.html',
  styleUrls: ['./bmi-cal.component.css']
})
export class BmiCalComponent {
  // Component logic and properties go here
}

function B(this: { h: HTMLInputElement, w: HTMLInputElement, ho: HTMLInputElement, wo: HTMLInputElement, g: HTMLInputElement[], r: HTMLInputElement }): void {
  const e: number = this.h.valueAsNumber;
  const t: number = this.w.valueAsNumber;
  const i: string = parseFloat((t / (e / 100) ** 2).toFixed(2)).toString();
  const h: number = [[0, 18.49], [18.5, 24.99], [25, 29.99], [30, 34.99], [35, 39.99], [40, 100]].findIndex(e => e[0] <= +i && +i < e[1]);
  let o: string = (.393700787 * e).toFixed(0);

  this.ho.value = `${e} cm / ${Math.floor(+o / 12)}' ${(+o % 12)}"`;
  this.wo.value = `${t} kg / ${(2.2046 * t).toFixed(2)} lb`;
  this.g[h].checked = true;
  this.r.value = i;
}

document.addEventListener('DOMContentLoaded', () => {
  const bmi: HTMLInputElement = document.querySelector('.c-bmi') as HTMLInputElement;
  bmi.addEventListener('input', B);
  bmi.dispatchEvent(new Event('input'));
});
