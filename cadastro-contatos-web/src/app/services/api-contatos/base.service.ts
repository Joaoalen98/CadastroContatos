import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LocalStorageService } from '../storage/local-storage.service';

@Injectable({
  providedIn: 'root'
})

export class BaseService {
  apiUrl: string = "http://localhost:5254/api";

  constructor(public http: HttpClient, public localStoargeService: LocalStorageService) { }

  getHeaders(): { [header: string]: string | string[] } {
    let header: { [header: string]: string | string[] } = {
      'Content-Type': 'application/json'
    };

    let token = this.localStoargeService.getObjecto<string>("token");

    if (token != null) {
      header['Authorization'] = `Bearer ${token}`;
    }

    return header;
  }
}
