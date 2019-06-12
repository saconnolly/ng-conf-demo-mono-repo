import { Component, OnInit } from '@angular/core';
import { SocketService } from './services/sockets';
import { MatDialog } from '@angular/material/dialog';
import { PresentationDetailsDialogComponent } from './presentation-details-dialog/presentation-details-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ng-conf-demo-app';

  constructor(
    private _socketService: SocketService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.initIoConnection();
  }

  private initIoConnection(): void {
    this._socketService.initSocket();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(PresentationDetailsDialogComponent, {
      width: '1500px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
