import { Injectable, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { fromEvent, debounceTime, Observable, switchMap, timer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IdleTimerService {

  private readonly idleTimeout = 30 * 60 * 1000; // 30 minutes in milliseconds
  private readonly warningTime = 5 * 60 * 1000; // 5 minutes before timeout
  private idleTimer: any;
  private warningTimer: any;

  constructor(private router: Router, private ngZone: NgZone , private toastr : ToastrService) {
    this.startWatching();
  }

  private startWatching() {

    const activityEvents: Observable<Event> = fromEvent(window, 'mousemove').pipe(
      debounceTime(1000)
    );

    activityEvents.pipe(
      switchMap(() => timer(0, this.idleTimeout))
    ).subscribe(() => {
      this.ngZone.run(() => {
        this.resetTimers();
      });
    });

    this.resetTimers();
  }

  private resetTimers() {
    if (this.idleTimer) clearTimeout(this.idleTimer);
    if (this.warningTimer) clearTimeout(this.warningTimer);

    this.ngZone.run(() => {

      this.idleTimer = setTimeout(() => this.logout(), this.idleTimeout);

      this.warningTimer = setTimeout(() => this.showWarningMsg(), this.idleTimeout - this.warningTime);
    });
  }

  private logout() {
    this.showInfoMsg();
    this.router.navigate(['/login']);
  }

  showWarningMsg() {
    this.toastr.warning('You will be logged out in 5 minutes due to inactivity !', 'Warning');
  }

  showInfoMsg() {
    this.toastr.info('You are logged out !', 'Info');
  }
}
