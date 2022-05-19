import { SocietiesService } from '../../services/societies.service'
import { Society } from 'src/app/core/models';
import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from 'src/app/core/services/data.service';
import { ToastService } from 'src/app/core/services/toast.service';


@Component({
  selector: 'app-society-edit-page',
  templateUrl: './society-edit-page.component.html',
  styleUrls: ['./society-edit-page.component.scss']
})
export class SocietyEditPageComponent implements OnInit {


  society?: Society;

  mode: string = 'DETAIL';
  modeBS = new BehaviorSubject<string>(this.mode);
  mode$ = this.modeBS.asObservable();

  societyForm: FormGroup


  constructor(
    private router: Router,
    private data: DataService,
    private societyService: SocietiesService,
    private fb: FormBuilder,
    private toastService: ToastService
  ) {
    this.societyForm = this.fb.group({
      ragioneSociale: ['', Validators.required],
      type: ['', Validators.required],
      address: ['', Validators.required],
      city: ['', Validators.required],
      cf: ['', Validators.required],
      albo: ['', Validators.required], //num
      affiliazione: ['', Validators.required] //num
    })
  }

  ngOnInit(): void {
    this.society = this.societyService.getSociety();
    if(!this.society) {
      this.changeMode('NEW');
    } else this.populateFormControls();
  }




  changeMode(newMode: string) {
    this.mode = newMode;
    this.modeBS.next(newMode);
  }



  populateFormControls() {
    if(this.society && this.mode !== 'NEW') {
      this.societyForm.patchValue(this.society);
    }
    if(this.mode === 'DETAIL') {
      this.societyForm.disable();
    }
  }





  saveModifies() {
    if(this.societyForm.valid) {
      if(this.mode === 'EDIT' && this.society) {
        const newSociety: Society = {
          id: this.society?.id,
          ...this.societyForm.value
        };
        this.data.modifySociety(newSociety).subscribe(res => {
          console.log('prova',res);
          this.societyService.resetService();
          this.router.navigateByUrl('/section/society')
        });
      }
      else {
        this.toastService.show(
        'Società Aggiunta',
        `La società ${this.societyForm.value.ragioneSociale} è stato aggiunta`,
        true
      );
        this.data.insertSociety({
          // id: '',
          ...this.societyForm.value
        }).subscribe(res => {
          this.societyService.resetService();
          this.router.navigateByUrl('/section/society');
        });
      }
    }
  }




  enableModifies() {
    this.changeMode('EDIT');
    this.societyForm.enable();
  }


  goBack() {
    this.societyService.resetService();
    this.router.navigateByUrl('/section/society');
  }
}
