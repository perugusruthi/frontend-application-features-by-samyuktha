import { Component, OnInit } from '@angular/core';
import {AddProjectComponent} from '../add-project/add-project.component';
import {MatDialog} from '@angular/material/dialog';


@Component({
  selector: 'app-project-real-flowchart',
  templateUrl: './project-real-flowchart.component.html',
  styleUrls: ['./project-real-flowchart.component.css']
})
export class ProjectRealFlowchartComponent implements OnInit {

  constructor(public dialog: MatDialog) { }
  addProject() {
    this.dialog.open(AddProjectComponent)
  }
  ngOnInit(): void {
  }

}
