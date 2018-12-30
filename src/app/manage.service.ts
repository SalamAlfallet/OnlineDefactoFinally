import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ManageService {

 /* public Product =[
    {id :0 , name : "pman1" , type: "man" , description : " i am pman1"},
    {id :0 , name : "pman2" , type: "man" , description : " i am pman2"},
    {id :0 , name : "pman3" , type: "woman" , description : " i am pwoman1"},
    {id :0 , name : "pman4" , type: "man" , description : " i am pman3"},
    {id :0 , name : "pman4" , type: "baby" , description : " i am pbaby1"},

  ]

*/
  constructor(private http:HttpClient) { }


 url= "http://localhost:3300/products";
 urlUsers="http://localhost:3300/users";
 isloginin = new Subject();
 setLogin(success){
  this.isloginin.next(success);
  
   } 
  
   getLogin(){
     return this.isloginin.asObservable()
   }

getUsers():Observable<[]>{

    return this.http.get<[]>(this.urlUsers);
    
} 
  getProduct():Observable<[]>{

    return this.http.get<[]>(this.url);
    
} 
addNewProduct(obj){
    return this.http.post<[]>(this.url,obj)

}
delet(id):Observable<{}>{

  return this.http.delete<[]>(`${this.url}/${id}`) 
}

getProductById(id){
  return this.http.get<[]>(`${this.url}/${id}`)
}

edit(id,obj){
 return this.http.put<[]>(`${this.url}/${id}`,obj)
}
}