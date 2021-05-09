import {Component, OnInit} from '@angular/core';
import {NgxSpinnerService} from 'ngx-spinner';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {environment} from '../../../../environments/environment';
import swal from 'sweetalert2';
import {AuthService} from '../../../services/auth/auth.service';
import {AuthHttpService} from "../../../services/auth/authHttp.service";

@Component({
    selector: 'app-user-unlocked',
    templateUrl: './user-unlocked.component.html',
    styleUrls: ['./user-unlocked.component.scss']
})
export class UserUnlockedComponent implements OnInit {
    dark: boolean;
    checked: boolean;
    formPasswordReset: FormGroup;
    flagPasswordReset: boolean;
    SITE_KEY: string;

    constructor(private authHttpService: AuthHttpService,
                private spinner: NgxSpinnerService,
                private router: Router,
                private formBuilder: FormBuilder) {
        this.SITE_KEY = environment.SITE_KEY;
    }

    ngOnInit(): void {
        this.buildFormPasswordReset();
    }

    buildFormPasswordReset() {
        this.formPasswordReset = this.formBuilder.group({
            username: ['', Validators.required]
        });
    }

    onSubmitForgotPassword(event: Event, grecaptcha) {
        event.preventDefault();
        if (this.formPasswordReset.valid) {
            this.forgotPassword(grecaptcha);
        } else {
            this.formPasswordReset.markAllAsTouched();
        }
    }

    forgotPassword(grecaptcha) {
        this.spinner.show();
        this.authHttpService.userUnlock(this.formPasswordReset.controls['username'].value).subscribe(response => {
            this.spinner.hide();
            this.flagPasswordReset = false;
            grecaptcha.reset();
            swal.fire({
                title: response['msg']['summary'],
                text: response['msg']['detail'],
                icon: 'info'
            });
        }, error => {
            this.spinner.hide();
            this.flagPasswordReset = false;
            grecaptcha.reset();
            swal.fire({
                title: error.error.msg.summary,
                text: error.error.msg.detail,
                icon: 'error'
            });
        });
    }

    showResponse() {
        this.flagPasswordReset = true;
    }

    get username() {
        return this.formPasswordReset.get('username');
    }
}