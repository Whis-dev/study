import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CatService } from '../cat.service';
import { CatImage } from '../models/cat-image.model';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  // images: CatImage[] = [];
  // image: CatImage;

  // @ViewChild('anchor', {
  //   static: true
  // })
  // anchor: ElementRef<HTMLDivElement>;
  // observer: IntersectionObserver;

  constructor(
    private catService: CatService
  ) { }

  ngOnInit() {
    // this.catService.getImages().subscribe(images => {
    //   this.images = images;
    // });
    // this.catService.getImageById('9bo').subscribe(image => {
    //   this.image = image;
    // });
    // this.observer = new IntersectionObserver(([entry]) => {
    //   if (entry.isIntersecting) {
    //     this.catService.fetchImages();
    //   }
    // });

    // this.observer.observe(this.anchor.nativeElement);

    if (this.images.length === 0) {
      this.catService.fetchImages();
    }
  }

  get images() {
    return this.catService.catImages;
  }

  onIntersect() {
    this.catService.fetchImages();
  }

}
