import { Component, OnInit } from '@angular/core';
import { GameserviceService } from '../shared/gameservice.service';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-addgame',
  templateUrl: './addgame.component.html',
  styleUrls: []
})
export class AddgameComponent implements OnInit {

  constructor(public service: GameserviceService,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.resetForm();
  }

  resetForm(form?: NgForm)
  {
    if (form != null)
    form.resetForm();
    this.service.formData = {
      id: null,
      GameName: '',
      GameDescription: '',
      Tag: '',
    }
  }

  onSubmit(form: NgForm)
  {
    if(form.value.GameId == null)
    this.insertGame(form);
    else
    this.updateGame(form);
  }
  insertGame(form: NgForm)
  {
    this.service.postGame(form.value).subscribe(res =>
      {
        this.toastr.success('Game has been added!','Congratulations!');
        this.resetForm(form);
        this.service.refreshList();
      })
  }
  updateGame(form: NgForm)
  {
    this.service.putGame(form.value).subscribe(res =>
      {
        this.toastr.info('Game has been updated','Congratulations!');
        this.resetForm(form);
        this.service.refreshList();
      })
  }
}
