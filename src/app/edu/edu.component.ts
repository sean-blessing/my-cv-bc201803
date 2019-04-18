import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edu',
  templateUrl: './edu.component.html',
  styleUrls: ['./edu.component.css']
})
export class EduComponent implements OnInit {
  highSchool: string = 'F.J. Reitz';
  hsCity: string = 'Evansville';
  hsState: string = 'Indiana';
  hsYear: number = 1989;
  college: string = 'Indiana University';
  collegeCity: string = 'Bloomington';
  collegeState: string = 'Indiana';
  collegeYear: number = 1993;
  major: string = 'Computer Information Systems';
  minor: string = 'Mathematics';
  userInput: string = 'User input goes here.';

  constructor() { }

  ngOnInit() {
    this.userInput = 'User input goes here.';
  }

  displayHighSchool(): string {
    return "Graduated from " + this.highSchool + " HighSchool in " + this.hsCity + ", " +
            this.hsState + " in "+ this.hsYear;
  }

  displayCollege(): string {
    let s = "Graduated from " + this.college + " in " + this.collegeCity + ", " +
    this.collegeState + " in "+ this.collegeYear + " with a major in " +
    this.major;
    if (this.minor != null && this.minor != "")
      s += " and a minor in "+ this.minor + ".";
    else
      s += ".";
    return s;
  }
}
