import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';
import { MessagesModule } from 'primeng/messages';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ParentService {

  constructor(private http: HttpClient, private messageService: MessageService) { }
  insertparentinfo(data: any) {
    console.log("PARENT DETAIL MAY ALREADY EXIST");
    this.http.post("http://localhost:5001/api/parent/parentreg",
      data).subscribe();
  }
  getParentinfo(): Observable<any[]> {
    return this.http.get<any[]>("http://localhost:5001/api/parent/viewparentinfo")
  }
}
