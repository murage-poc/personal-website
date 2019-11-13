import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
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

    constructor(private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.route.fragment.pipe(share()).subscribe((v) => this.isActive = v||'home');
    }

}
