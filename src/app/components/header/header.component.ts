import {Component, OnInit} from '@angular/core';

import {AuthService} from '../../services/auth.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
    title = 'Crypto Notifier';

    constructor(private authService: AuthService) {}

    ngOnInit() {
    }

}
