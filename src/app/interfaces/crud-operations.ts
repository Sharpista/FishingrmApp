import { Observable } from "rxjs";

export interface CrudOperations<T, ID>{

  save(t:T): Observable<T>;
  update(id:ID, t:T): Observable<T>;
  find(id:ID) : Observable<T>;
  findAll(): Observable<T[]>;
  delete(id:ID): Observable<any>;
}
