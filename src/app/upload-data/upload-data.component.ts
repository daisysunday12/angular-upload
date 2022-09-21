import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { ColDef } from 'ag-grid-community';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
declare var $: any;

@Component({
  selector: 'app-upload-data',
  templateUrl: './upload-data.component.html',
  styleUrls: ['./upload-data.component.css']
})
export class UploadDataComponent implements OnInit {
  nikForm: any;
  selectedFile: any;

  constructor(private serviceService: ServiceService, private formBuilder: FormBuilder, private router: Router, private activatedRouter: ActivatedRoute) { }

  ngOnInit(): void {
    this.createNikForm()
  }
  createNikForm() {
    this.nikForm = this.formBuilder.group({
      'nik': ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(100)])]
    })
  }
  createNik(values: any) {
  }

  onFileChange(event: any) {
    if (event.target.files.length > 0) {
      this.selectedFile = event.target.files[0]
      console.log(this.selectedFile)
    }
  }
  uploadFile() {
    // let id = '';
    // if (this.activatedRouter.snapshot.params['id']) {
    //   id = this.activatedRouter.snapshot.params['id'];
    // }
    // const uploadData = new FormData;
    // // console.log("data image", this.selectedFile);
    // uploadData.append('image', this.selectedFile, this.selectedFile.name);
    // this.serviceService.uploadImageKandidat(this.activatedRouter.snapshot.params['id'], uploadData).subscribe(res => {
    //   if (res.msg === 'success') {
    //     this.navigateTo('/uploadfile-pekerjaan/' + id)
    //     Swal.fire(
    //       'Success!',
    //       'Your file has been update.',
    //       'success',
    //     )
    //   } else {
    //     Swal.fire(
    //       'Failed!',
    //       'Your file has been update.',
    //       'error',
    //     )
    //   }
    // })
    // Swal.fire(
    //   'Failed!',
    //   'Your file has been error.',
    //   'error',
    // )
  }
  navigateTo(route: any) {
    this.router.navigate([route])
  }
}
