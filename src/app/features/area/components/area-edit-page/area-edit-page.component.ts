import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { Area } from 'src/app/core/models';
import { DataService } from 'src/app/core/services/data.service';
import { AreaService } from '../../services/area.service';
import { ToastService } from 'src/app/core/services/toast.service';

@Component({
  selector: 'app-area-edit-page',
  templateUrl: './area-edit-page.component.html',
  styleUrls: ['./area-edit-page.component.scss']
})
export class AreaEditPageComponent implements OnInit {

  area?: Area;

  mode: string = 'DETAIL';
  modeBS = new BehaviorSubject<string>(this.mode);
  mode$ = this.modeBS.asObservable();

  formGroup: FormGroup

  constructor(
    private router: Router,
    private data: DataService,
    private areaService: AreaService,
    private fb: FormBuilder,
    private toastService: ToastService

  ) {
    this.formGroup = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required]
    })
  }

  ngOnInit(): void {
    this.area = this.areaService.getArea();
    if(!this.area) {
      this.changeMode('NEW');
    } else this.populateFormControls();
  }

  populateFormControls() {
    if(this.area && this.mode !== 'NEW') {
      this.formGroup.patchValue(this.area);
    }
    if(this.mode === 'DETAIL') {
      this.formGroup.disable();
    }
  }

  enableModifies() {
    this.changeMode('EDIT');
    this.formGroup.enable();
  }

  saveModifies() {
    if(this.formGroup.valid) {
      if(this.mode === 'EDIT' && this.area) {
        const newArea: Area = {
          id: this.area?.id,
          ...this.formGroup.value
        };
        this.data.modifyArea(newArea).subscribe(res => {
          console.log(res);
          this.areaService.resetService();
          this.router.navigateByUrl('/section/area')
        });
      }
      else {
        this.toastService.show(
          'Settore Aggiunto',
          ` Il settore ${this.formGroup.value.name} è stato aggiunto`,
          true
        );
        this.data.insertArea({
          // id: '',
          ...this.formGroup.value
        }).subscribe(res => {
          this.areaService.resetService();
          this.router.navigateByUrl('/section/area');
        });
      }
    }
  }

  changeMode(newMode: string) {
    this.mode = newMode;
    this.modeBS.next(newMode);
  }

  goBack() {
    this.areaService.resetService();
    this.router.navigateByUrl('/section/area');
  }


}
