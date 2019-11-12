import { Component, OnInit } from '@angular/core';
import { CatImage } from '../models/cat-image.model';
import { CatService } from '../cat.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cat',
  templateUrl: './cat.component.html',
  styleUrls: ['./cat.component.css']
})
export class CatComponent implements OnInit {
  // image: CatImage;

  constructor(
    private route: ActivatedRoute,
    private catService: CatService
  ) { }

  ngOnInit() {
    // const catId = this.route.snapshot.paramMap.get('cat-id');

    // this.catService.getImageById(catId).subscribe(image => {
    //   this.image = image;
    // });
    if (!this.image) {
      this.catService.fetchImageById(this.id);
    }
  }

  get id() {
    return this.route.snapshot.paramMap.get('cat-id');
  }

  get image() {
    return this.catService.findImage(this.id);
  }
}
