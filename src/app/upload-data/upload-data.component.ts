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
    const uploadData = new FormData;
    uploadData.append('file', this.selectedFile, this.selectedFile.name);
    this.serviceService.uploadKaryawan(uploadData).subscribe(res => {
      if (res.result === 'success') {
        location.reload();
        Swal.fire(
          'Success!',
          'Your file has been update.',
          'success',
        )
      } else {
        Swal.fire(
          'Failed!',
          'Your file has been update.',
          'error',
        )
      }
    })
  }
  navigateTo(route: any) {
    this.router.navigate([route])
  }
}
