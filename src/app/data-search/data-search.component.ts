import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { ColDef } from 'ag-grid-community';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
declare var $: any;

@Component({
  selector: 'app-data-search',
  templateUrl: './data-search.component.html',
  styleUrls: ['./data-search.component.css']
})

export class DataSearchComponent implements OnInit {
  dataKaryawan: any;
  nikForm: any;
  p: any;
  data: any;

  set accessToken(token: string) {
    localStorage.setItem('accessToken', token);
  }

  get accessToken(): string {
    return localStorage.getItem('accessToken') ?? '';
  }

  constructor(private serviceService: ServiceService, private formBuilder: FormBuilder, private router: Router, private activatedRouter: ActivatedRoute) { }

  ngOnInit(): void {
    this.createNikForm();
  }

  public defaultColDef: ColDef = {
    flex: 1,
    minWidth: 200,
    resizable: true,
    floatingFilter: true,
  };

  columnDefs: ColDef[] = [
    {
      field: 'pt',
      headerName: 'PT',
      pinned: 'left',
      filter: 'agColumnFilter',
      resizable: true,
      floatingFilter: true,
      maxWidth: 100,
    },
    {
      field: 'unit_bisnis',
      headerName: 'UNIT BISNIS',
      pinned: 'left',
      filter: 'agColumnFilter',
      resizable: true,
      floatingFilter: true,
      width: 200,
    },
    {
      field: 'nik',
      headerName: 'NIK',
      pinned: 'left',
      filter: 'agTextColumnFilter',
      resizable: true,
      floatingFilter: true,
      width: 120,
    },
    {
      field: 'nama',
      headerName: 'Nama',
      pinned: 'left',
      filter: 'agTextColumnFilter',
      resizable: true,
      floatingFilter: true,
      width: 200,
    },
    {
      field: 'tempat_lahir',
      headerName: 'Tempat Lahir',
      filter: 'agColumnFilter',
      resizable: true,
      floatingFilter: true,
      width: 200,
    },
    {
      field: 'tanggal_lahir',
      headerName: 'Tanggal Lahir',
      filter: 'agDateColumnFilter',
      resizable: true,
      floatingFilter: true,
      width: 120,
    },
    {
      field: 'umur',
      headerName: 'Umur',
      filter: 'agColumnFilter',
      resizable: true,
      floatingFilter: true,
      maxWidth: 120,
    },
    {
      field: 'jenis_kelamin',
      headerName: 'Jenis Kelamin',
      filter: 'agColumnFilter',
      floatingFilter: true,
      width: 500,
      resizable: false,
    },
    {
      field: 'nationality',
      headerName: 'Nationality',
      filter: 'agColumnFilter',
      floatingFilter: true,
      width: 500,
      resizable: false,
    },
    {
      field: 'religion',
      headerName: 'Relegion',
      filter: 'agColumnFilter',
      floatingFilter: true,
      width: 500,
      resizable: false,
    },
    {
      field: 'status',
      headerName: 'Status',
      filter: 'agColumnFilter',
      floatingFilter: true,
      width: 500,
      resizable: false,
    },
    {
      field: 'anak',
      headerName: 'Anak',
      filter: 'agColumnFilter',
      floatingFilter: true,
      maxWidth: 100,
      resizable: false,
    },
    {
      field: 'ptkp',
      headerName: 'PTKP',
      filter: 'agTextColumnFilter',
      floatingFilter: true,
      maxWidth: 120,
      resizable: false,
    },
    {
      field: 'npwp',
      headerName: 'NPWP',
      filter: 'agTextColumnFilter',
      floatingFilter: true,
      maxWidth: 300,
      resizable: false,
    },
    {
      field: 'kpt',
      headerName: 'KTP',
      filter: 'agTextColumnFilter',
      floatingFilter: true,
      maxWidth: 300,
      resizable: false,
    },
    {
      field: 'education',
      headerName: 'EDUCATION',
      filter: 'agTextColumnFilter',
      floatingFilter: true,
      maxWidth: 150,
      resizable: false,
    },
    {
      field: 'keluar',
      headerName: 'KELUAR',
      filter: 'agColumnFilter',
      floatingFilter: true,
      maxWidth: 300,
      resizable: false,
    },
    {
      field: 'tanggal_keluar',
      headerName: 'TANGGAL KELUAR',
      filter: 'agDateColumnFilter',
      floatingFilter: true,
      maxWidth: 300,
      resizable: false,
    },
    {
      field: 'alasan_keluar',
      headerName: 'ALASAN KELUAR',
      filter: 'agColumnFilter',
      floatingFilter: true,
      maxWidth: 300,
      resizable: false,
    },
    {
      field: 'tmk',
      headerName: 'TMK',
      filter: 'agDateColumnFilter',
      floatingFilter: true,
      maxWidth: 300,
      resizable: false,
    },
    {
      field: 'company_last',
      headerName: 'COMPANY LAST',
      filter: 'agColumnFilter',
      floatingFilter: true,
      maxWidth: 300,
      resizable: false,
    },
    {
      field: 'masa_kerja',
      headerName: 'MASA KERJA',
      filter: 'agColumnFilter',
      floatingFilter: true,
      maxWidth: 300,
      resizable: false,
    },
    {
      field: 'lokasi',
      headerName: 'LOKASI',
      filter: 'agColumnFilter',
      floatingFilter: true,
      maxWidth: 300,
      resizable: false,
    },
    {
      field: 'sublokasi',
      headerName: 'SUBLOKASI',
      filter: 'agColumnFilter',
      floatingFilter: true,
      maxWidth: 300,
      resizable: false,
    },
    {
      field: 'area',
      headerName: 'AREA',
      filter: 'agColumnFilter',
      floatingFilter: true,
      maxWidth: 300,
      resizable: false,
    },
    {
      field: 'departement',
      headerName: 'DEPARTEMENT',
      filter: 'agColumnFilter',
      floatingFilter: true,
      maxWidth: 300,
      resizable: false,
    },
    {
      field: 'golongan',
      headerName: 'GOLONGAN',
      filter: 'agColumnFilter',
      floatingFilter: true,
      maxWidth: 300,
      resizable: false,
    },
    {
      field: 'subgolongan',
      headerName: 'SUBGOLONGAN',
      filter: 'agColumnFilter',
      floatingFilter: true,
      maxWidth: 300,
      resizable: false,
    },
    {
      field: 'jabatan',
      headerName: 'JABATAN',
      filter: 'agColumnFilter',
      floatingFilter: true,
      maxWidth: 300,
      resizable: false,
    },
    {
      field: 'level',
      headerName: 'LEVEL',
      filter: 'agColumnFilter',
      floatingFilter: true,
      maxWidth: 300,
      resizable: false,
    },
    {
      field: 'no_telp',
      headerName: 'NO TELP',
      filter: 'agTextColumnFilter',
      floatingFilter: true,
      maxWidth: 300,
      resizable: false,
    },
    {
      field: 'no_hp',
      headerName: 'NO HP',
      filter: 'agTextColumnFilter',
      floatingFilter: true,
      maxWidth: 300,
      resizable: false,
    },
    {
      field: 'email',
      headerName: 'EMAIL',
      filter: 'agTextColumnFilter',
      floatingFilter: true,
      maxWidth: 300,
      resizable: false,
    },
    {
      field: '',
      headerName: 'Action',
      maxWidth: 100,
      cellRenderer: this.actionRender.bind(this),
      pinned: 'right',
    },
  ];
  rowData: any = [];

  actionRender(param: any) {
    let div = document.createElement('div');
    let htmlCode = '<button type="button" class="btn btn-sm btn-warning"><i class="fa-solid fa-pen"></i></button>';
    div.innerHTML = htmlCode;
    // handle view button
    // handle view edit
    let editButton = div.querySelector('.btn-warning')
    // @ts-ignore
    editButton.addEventListener('click', () => {
      this.editPekerjaanDetails(param)
    })
    return div;
  }
  editPekerjaanDetails(param: any) {
    this.router.navigate(['/update/' + param.data.id])
  }
  createNikForm() {
    this.nikForm = this.formBuilder.group({
      'nik': ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(100)])]
    })
  }
  createNik(values: any) {
    this.accessToken = values.nik;
    location.reload();
  }
  navigateTo(route: any) {
    this.router.navigate([route])
  }
}
