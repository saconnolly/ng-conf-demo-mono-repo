import { Injectable } from '@angular/core';
import { Observable, Observer, of, Subject } from 'rxjs';

import * as socketIo from 'socket.io-client';
import { ObservableStore } from '../observable-store/observable-store';

const SERVER_URL = 'https://express-server-sockets.azurewebsites.net';

@Injectable({
  providedIn: 'root'
})
export class SocketService extends ObservableStore<any> {
    private socket;
    browserOrder$ = new Subject();

    constructor() { super({ trackStateHistory: true })}

    public initSocket(): void {
        this.socket = socketIo.connect(SERVER_URL);
        this.socket.on('browser-data', (data: any) => {
          this.setState({ browserData: data }, 'NewData');
        });
        this.socket.on('browser-order', (data: any) => {
          this.browserOrder$.next(data);
        });
    }

    public emitNewBrowserDataToSocket(data: any): void {
      this.socket.emit('new-browser-data', data);
    }

    public emitNewBrowserOrderToSocket(data: any): void {
      this.socket.emit('new-browser-order', data);
    }
}
