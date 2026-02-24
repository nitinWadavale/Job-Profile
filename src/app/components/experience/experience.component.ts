import { Component, OnInit } from '@angular/core';
import { Experience } from '../../models/profile.model';
import { ProfileService } from '../../services/profile.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent implements OnInit {
  experiences: Experience[] = [];

  constructor(private profileService: ProfileService) {}

  ngOnInit(): void {
    this.experiences = this.profileService.getExperiences();
  }
}
