import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServiceService } from '../service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-data-update',
  templateUrl: './data-update.component.html',
  styleUrls: ['./data-update.component.css']
})
export class DataUpdateComponent implements OnInit {
  // @ts-ignore
  pekerjaanDetails: any;
  kandidatForm: any;
  constructor(private serviceService: ServiceService, private formBuilder: FormBuilder, private router: Router, private activatedRouter: ActivatedRoute) { }
  ngOnInit(): void {
    const Id = this.activatedRouter.snapshot.params['id'];
    this.actionRender(Id);
    this.createKandidatForm();
  }
  actionRender(params: any) {
    this.serviceService.getDetails(params).subscribe(res => {
      this.pekerjaanDetails = res;
      console.log(res)
    })
  }

  createKandidatForm() {
    this.kandidatForm = this.formBuilder.group({
      'no_telp': ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(100)])],
      'no_hp': ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(100)])],
      'email': ['', Validators.compose([Validators.required, Validators.email])],
    })
  }

  createKandidat(values: any) {
    let formData = new FormData();
    formData.append('email', values.email);
    formData.append('no_hp', values.no_hp);
    formData.append('no_telp', values.no_telp);

    const id = this.activatedRouter.snapshot.params["id"];
    this.serviceService.updateKaryawan(id, formData).subscribe(res => {
      console.log(res)
      this.navigateTo('./home')
      Swal.fire(
        'Success!',
        'Your file has been update.',
        'success',
      )
    })
    this.navigateTo('./search')
    Swal.fire(
      'Success!',
      'Data has been update',
      'success',
    )
  }
  navigateTo(route: any) {
    this.router.navigate([route])
  }
}
