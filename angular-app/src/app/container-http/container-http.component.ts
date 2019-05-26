import { Component } from '@angular/core';
import { HttpService } from '../services/http';
import { DeviceDetectorService } from 'ngx-device-detector';
import { ObjToArray } from '../services/obj-to-array';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-container-http',
  templateUrl: './container-http.component.html',
  styleUrls: ['./container-http.component.css']
})
export class ContainerHttpComponent {
  browserDataObj: object;
  browserDataArray: Array<object> = [];

  constructor(
    private _http: HttpService,
    private _deviceDetector: DeviceDetectorService,
    private _objToArray: ObjToArray
  ) { }

  sendBrowserData(): void {
    this._http.sendBrowserData(this._deviceDetector.browser)
      .subscribe(res => {
        this.browserDataArray = this._objToArray.transform(res);
      });
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.browserDataArray, event.previousIndex, event.currentIndex);
  }
}
