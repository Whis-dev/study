import { Component, OnInit, ElementRef, ViewChild, Output, EventEmitter, OnDestroy } from '@angular/core';

import { CatService } from '../cat.service';

@Component({
  selector: 'app-intersection-observer',
  template: `
    <div #anchor></div>
  `
})

export class IntersectionObserverComponent implements OnInit, OnDestroy {
  @Output()
  intersect = new EventEmitter();

  @ViewChild('anchor', {
    static: true
  })
  anchor: ElementRef<HTMLDivElement>;
  observer: IntersectionObserver;

  constructor(
    private catService: CatService
  ) { }

  ngOnInit() {
    this.observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        this.intersect.emit();
      }
    });

    this.observer.observe(this.anchor.nativeElement);
  }

  ngOnDestroy() {
    this.observer.disconnect();
  }
}
