import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CatImage } from './models/cat-image.model';

@Injectable({
    providedIn: 'root'
})
export class CatService {
    catImages: CatImage[] = [];

    constructor(
      private http: HttpClient
      ) {}

  //   getImages() {
  //       // return [
  //       //     {
  //       //         id: "7ht",
  //       //         url: "https://cdn2.thecatapi.com/images/7ht.jpg",
  //       //         width: 4752,
  //       //         height: 3168
  //       //       },
  //       //       {
  //       //         id: "9bo",
  //       //         url: "https://cdn2.thecatapi.com/images/9bo.jpg",
  //       //         width: 560,
  //       //         height: 415
  //       //       },
  //       //       {
  //       //         id: "9ej",
  //       //         url: "https://cdn2.thecatapi.com/images/9ej.jpg",
  //       //         width: 336,
  //       //         height: 448
  //       //       }
  //       // ];

  //       return this.http.get<CatImage[]>('http://api.thecatapi.com/v1/images/search', {
  //         headers: new HttpHeaders({
  //           'x-api-key': '645cf6a3-0e8e-4f4f-8475-dcb69793257d'
  //         }),
  //         params: {
  //           limit: '10',
  //           pages: '1'
  //         }
  //       });
  //   }

  //   getImageById(id: string) {
  //     return this.http.get<CatImage>(
  //       `https://api.thecatapi.com/v1/images/${id}`, {
  //       headers: new HttpHeaders({
  //         'x-api-key': '645cf6a3-0e8e-4f4f-8475-dcb69793257d'
  //       })
  //     }
  //   );
  // }

  fetchImages() {
    this.http
    .get<CatImage[]>('https://api.thecatapi.com/v1/images/search', {
      headers: new HttpHeaders({
        'x-api-key' : '645cf6a3-0e8e-4f4f-8475-dcb69793257d'
      }),
      params: {
        limit: '10',
        page: '1'
      }
    }).subscribe(images => {
      this.catImages = [...this.catImages, ...images];
    });
  }

  fetchImageById(id: string) {
    return this.http.get<CatImage>(
      `https://api.thiecatapi.com/v1/images/${id}`, {
        headers: new HttpHeaders({
          'x-api-key' : '645cf6a3-0e8e-4f4f-8475-dcb69793257d'
        })
      }
    ).subscribe(image => {
      this.catImages.push(image);
    });
  }

  findImage(id: string) {
    return this.catImages.find(image => image.id === id);
  }
}
