import { Component, OnInit } from '@angular/core';
import { GameserviceService } from '../shared/gameservice.service';
import { ToastrService } from 'ngx-toastr';
import { GameDetail } from '../shared/game-detail';

@Component({
  selector: 'app-gamelist',
  templateUrl: './gamelist.component.html',
  styleUrls: []
})
export class GamelistComponent implements OnInit {

  constructor(public service: GameserviceService,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.service.refreshList();
  }

  populateForm(gam: GameDetail){
    this.service.formData = Object.assign({},gam);
  }

  onDelete(id: number)
  {
    if(confirm('Are you sure you want to delete this record?'))
    {
      this.service.DeleteGame(id).subscribe(res => {
        this.service.refreshList();
        this.toastr.warning('Game got deleted!','Game is gone!')
      })
    }
  }

}
