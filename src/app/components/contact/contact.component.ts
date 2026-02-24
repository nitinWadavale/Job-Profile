import { Component, OnInit } from '@angular/core';
import { PersonalInfo } from '../../models/profile.model';
import { ProfileService } from '../../services/profile.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent implements OnInit {
  profile: PersonalInfo | undefined;
  submitted = false;
  currentYear = new Date().getFullYear();

  form = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  constructor(private profileService: ProfileService) {}

  ngOnInit(): void {
    this.profile = this.profileService.getPersonalInfo();
  }

  onSubmit(): void {
    this.submitted = true;
    setTimeout(() => {
      this.submitted = false;
      this.form = { name: '', email: '', subject: '', message: '' };
    }, 3000);
  }
}
