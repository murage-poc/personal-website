import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";
import {share} from "rxjs/operators";

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

    toggleSideMenu = false;
    isActive = 'home';
    today = new Date();

    constructor(private route: ActivatedRoute, private router: Router) {
    }

    ngOnInit() {
        this.loadBackgroundImage();

        this.route.fragment.pipe(share()).subscribe((v) => this.isActive = v || 'home');
        this.router.events.subscribe((evt) => {
            if (evt instanceof NavigationEnd) {
                this.toggleSideMenu = false;
            }
        });
    }

    loadBackgroundImage(){
        document.body.style.backgroundImage="url(assets/images/background.jpg)"
    }
}
