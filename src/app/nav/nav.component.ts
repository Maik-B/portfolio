import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  isFixed = false;
  lastScrollTop = 0;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const st = window.pageYOffset || document.documentElement.scrollTop;
    if (st < this.lastScrollTop) {
      // Hochscrollen: Navbar fixieren
      this.isFixed = true;
    } else {
      // Runterscrollen: Navbar nicht fixiert
      this.isFixed = false;
    }
    this.lastScrollTop = st <= 0 ? 0 : st;
  }
}

