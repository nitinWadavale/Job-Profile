import { Component, OnInit } from '@angular/core';
import { Project } from '../../models/profile.model';
import { ProfileService } from '../../services/profile.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [];
  showAll = false;

  constructor(private profileService: ProfileService) {}

  ngOnInit(): void {
    this.projects = this.profileService.getProjects();
  }

  get displayedProjects(): Project[] {
    return this.showAll ? this.projects : this.projects.filter(p => p.featured);
  }

  toggleShowAll(): void {
    this.showAll = !this.showAll;
  }
}
