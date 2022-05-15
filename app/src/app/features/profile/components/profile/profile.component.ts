import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  currentUser: any = {};

  constructor(
    public authService: AuthService, 
    public route: ActivatedRoute
  ) {/*Empty*/ }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id')
      
      this.authService
      .getUserProfile(id)
      .subscribe((data) => {
          // console.log(data.data)
          this.currentUser = data.data;
        })
    })
  }

}
