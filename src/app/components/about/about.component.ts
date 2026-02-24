import { Component, OnInit } from '@angular/core';
import { Education, PersonalInfo, Skill } from '../../models/profile.model';
import { ProfileService } from '../../services/profile.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent implements OnInit {
  profile!: PersonalInfo;
  skills: Skill[] = [];
  education: Education[] = [];

  constructor(private profileService: ProfileService) {}

  ngOnInit(): void {
    this.profile = this.profileService.getPersonalInfo();
    this.skills = this.profileService.getSkills();
    this.education = this.profileService.getEducation();
  }
}
