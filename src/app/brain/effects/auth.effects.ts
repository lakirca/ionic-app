import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Router } from '@angular/router';
import { Actions, Effect, ofType} from '@ngrx/effects';
import { Observable, fromEventPattern } from 'rxjs';
import { tap, map, switchMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs'

import { AuthService } from '../../service/auth.service';
import { AuthActionTypes, LogIn, LogInSuccess, LogInFailure} from '../actions/auth.actions';

@Injectable({
    providedIn: 'root'
})

export class AuthEffects {
    constructor(
        private actions: Actions,
        private authService: AuthService,
        private router: Router
    ) {

    }

    @Effect()
    LogIn: Observable<any> = this.actions.pipe(
        ofType(AuthActionTypes.LOGIN),
        map((action: LogIn) => action.payload),
        switchMap(payload => {
            return this.authService.logIn(payload.email, payload.password).pipe(
                map((user) => {
                    return new LogInSuccess({token: '123456', email: payload.email}); 
                }),
                catchError((error) => {
                    return of(new LogInFailure({error: error}));
                })
            )
        })
    )    

    @Effect({dispatch: false})
    LogInSuccess: Observable<any> = this.actions.pipe(
        ofType(AuthActionTypes.LOGIN_SUCCESS),
        tap((user) => {
            localStorage.setItem('token', user.payload.token);
        })
    );

    @Effect({dispatch: false})
    LogInFailure: Observable<any> = this.actions.pipe(
        ofType(AuthActionTypes.LOGIN_FAILURE)
    );
}