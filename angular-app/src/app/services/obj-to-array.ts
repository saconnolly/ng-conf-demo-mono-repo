import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ObjToArray {
    constructor() {}

    public transform(obj: Object): Array<Object> {
      const transformedArray = [];
      const props = Object.keys(obj);
      for (const prop of props) {
        transformedArray.push({[prop] : obj[prop]});
      }
      return transformedArray;
    }
}
