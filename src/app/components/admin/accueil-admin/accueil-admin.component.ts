import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accueil-admin',
  templateUrl: './accueil-admin.component.html',
  styleUrls: ['./accueil-admin.component.css']
})
export class AccueilAdminComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  
  ngOnInit(): void {
    language: {
      url: 'https://cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/French.json'
    }
    this.dtOptions = {
      pagingType: 'full_numbers',
      searching: true,
      lengthChange:true,
      paging: true,
      info: false,
      pageLength:4,
      language: {
        url: 'https://cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/French.json'
      }
    };

   
  }
}
