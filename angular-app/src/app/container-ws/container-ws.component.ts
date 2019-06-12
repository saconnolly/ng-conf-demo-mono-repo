import { Component, OnInit, OnDestroy } from '@angular/core';
import { SocketService } from '../services/sockets';
import { DeviceDetectorService } from 'ngx-device-detector';
import { SubSink } from 'subsink';
import { ObjToArray } from '../services/obj-to-array';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Subscription, Subject } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-container-ws',
  templateUrl: './container-ws.component.html',
  styleUrls: ['./container-ws.component.css']
})
export class ContainerWsComponent implements OnInit, OnDestroy {
  browserDataObj: object;
  browserDataArray: Array<object> = [];
  ioConnection: any;
  subsink = new SubSink();
  connected: Subscription;
  isConnected = false;
  checker: number;

  constructor(
    private _socketService: SocketService,
    private _deviceDetector: DeviceDetectorService,
    private _objToArray: ObjToArray
  ) {}

  ngOnInit() {
    this.subsink.sink = this._socketService.stateChanged.subscribe(state => {
      if (state) {
        this.browserDataArray = this._objToArray.transform(state.browserData);
      }
    });
    this.subsink.sink = this._socketService.browserOrder$.subscribe((bo: any) => {
      if (this.checker !== bo.key) {
        moveItemInArray(this.browserDataArray, bo.previousIndex, bo.currentIndex);
      }
    });
  }

  sendBrowserData(): void {
    this._socketService.emitNewBrowserDataToSocket(this._deviceDetector.browser);
  }

  drop(event: CdkDragDrop<string[]>) {
    this.checker = Math.random();
    this._socketService.emitNewBrowserOrderToSocket({
      browserDataArray: this.browserDataArray,
      previousIndex: event.previousIndex,
      currentIndex: event.currentIndex,
      key: this.checker
    });
    moveItemInArray(this.browserDataArray, event.previousIndex, event.currentIndex);
  }

  ngOnDestroy() {
    this.subsink.unsubscribe();
  }
}
