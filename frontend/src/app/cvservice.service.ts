import { Injectable } from '@angular/core';
import { HttpClient,HttpRequest, HttpEvent } from '@angular/common/http';
const baseUrl='http://localhost:8080/api/cv'
@Injectable({
  providedIn: 'root'
})
export class CvserviceService {

  constructor(private http : HttpClient) { }
  createuser(data:any){
    return this.http.post(baseUrl,data);
  }
  authlogin(data:any){
    return this.http.post(baseUrl+'/login',data);
  }
  adminlogin(data:any){
    return this.http.post(baseUrl+'/adminlogin',data)
  }
  createcenter(data:any){
    return this.http.post(baseUrl+'/addcenter',data);
  }
  createbooking(data:any){
    return this.http.post(baseUrl+'/addbooking',data);
  }
  getcenters(){
    return this.http.get(baseUrl)
  }
  getbookings(){
    return this.http.get(baseUrl+'/getbookings')
  }
  delete(id:any){
    return this.http.post(baseUrl+'/delete',id);
  }
  get(id:any){
    return this.http.get(`${baseUrl}/${id}`);
  }
}
