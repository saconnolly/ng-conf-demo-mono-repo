import { Component, OnInit, OnDestroy } from '@angular/core';
import { SocketService } from '../services/sockets';
import { DeviceDetectorService } from 'ngx-device-detector';
import { SubSink } from 'subsink';
import { ObjToArray } from '../services/obj-to-array';

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

  constructor(
    private _socketService: SocketService,
    private _deviceDetector: DeviceDetectorService,
    private _objToArray: ObjToArray
  ) { }

  ngOnInit() {
    this.subsink.sink = this._socketService.stateChanged.subscribe(state => {
      if (state) {
        this.browserDataArray = this._objToArray.transform(state.browserData);
      }
    });
  }

  sendBrowserData(): void {
    this._socketService.emitToSocket(this._deviceDetector.browser);
  }

  ngOnDestroy() {
    this.subsink.unsubscribe();
  }
}
