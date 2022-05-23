import { Component, OnInit } from '@angular/core';
import {
  ModalDismissReasons,
  NgbDateStruct,
  NgbModal,
} from '@ng-bootstrap/ng-bootstrap';
import { ChildvaccinService } from '../childvaccin.service';
import { Childvaccin } from '../childvaccin';
import { AddnewchildService } from '../addnewchild.service';
import { Reportencours } from '../reportencours';
import { ReportService } from '../report.service';
import { EncoursService } from '../encours.service';
import { Encours } from '../encours';

@Component({
  selector: 'app-listesvaccin',
  templateUrl: './listesvaccin.component.html',
  styleUrls: ['./listesvaccin.component.css'],
})
export class ListesvaccinComponent implements OnInit {
  model: NgbDateStruct | undefined;

  title = 'المؤسسة';
  closeResult = '';
  searchText: any;
  childs!: Childvaccin[];
  reportencours!: Reportencours[];
  encours!: Encours[];
  heroes = [
    { id: 'ملقح', name: '5161187', country: 'youssef' },
    { id: 'ملقح', name: '5161187', country: 'youssef' },
    { id: 'ملقح', name: '5161187', country: 'youssef' },
    { id: 'ملقح', name: '5161187', country: 'youssef' },
    { id: 'ملقح', name: '5161187', country: 'youssef' },
    { id: 'ملقح', name: '5161187', country: 'youssef' },

    { id: 'ملقح', name: '5161187', country: 'youssef' },
    { id: 'ملقح', name: '5161187', country: 'youssef' },
    { id: 'ملقح', name: '5161187', country: 'youssef' },
    { id: 'ملقح', name: '5161187', country: 'youssef' },
    { id: 'ملقح', name: '5161187', country: 'youssef' },
    { id: 'ملقح', name: '5161187', country: 'youssef' },

    { id: 'ملقح', name: '5161187', country: 'youssef' },
    { id: 'ملقح', name: '5161187', country: 'youssef' },
    { id: 'ملقح', name: '5161187', country: 'youssef' },
  ];
  Days: string[] = [
    'الاثنين',
    'الثلاثاء',
    'الأربعاء',
    'الخميس',
    'الجمعة',
    'السبت',
    'الأحد',
  ];
  constructor(
    private modalService: NgbModal,
    private childservice: ChildvaccinService,
    private addnewchildservice: AddnewchildService,
    private reportservice: ReportService,
    private encoursservice: EncoursService
  ) {}

  ngOnInit(): void {
    this.getAllChildController();
  }
  open(content: any) {
    this.modalService
      .open(content, { ariaLabelledBy: 'modal-basic-title' })
      .result.then(
        (result) => {
          this.closeResult = `Closed with: ${result}`;
        },
        (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  openVerticallyCentered(longcontent: any) {
    this.modalService.open(longcontent, { centered: true });
  }
  openEncours(content: any) {
    this.modalService.open(content, { centered: true });
  }

  getAllChildController() {
    this.childservice.getChild().subscribe((data) => {
      console.log(data);
      this.childs = data;
    });
  }
  addnewchild() {
    this.addnewchildservice.addChildVaccinService().subscribe((data) => {
      this.childs = data;
    });
  }
  addReport() {
    this.reportservice.addreport().subscribe((data) => {
      this.reportencours = data;
    });
  }
  addencours() {
    this.encoursservice.addEncoursService().subscribe((data) => {
      this.encours = data;
    });
  }
}
