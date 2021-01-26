import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { BusinessService } from '../../../core/services/business/business.service';
import { Business, BusinessDetail, BusinessConfig } from '../../../core/models/business/business.model';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-businesses',
  templateUrl: './businesses.component.html',
  styleUrls: ['./businesses.component.scss']
})
export class BusinessesComponent implements OnInit {

  paramForm0: FormGroup;
  paramForm1: FormGroup;
  paramForm2: FormGroup;
  paramForm3: FormGroup;
  paramForm4: FormGroup;
  paramForm5: FormGroup;
  paramForm6: FormGroup;
  paramForm7: FormGroup;
  paramForm8: FormGroup;
  paramForm9: FormGroup;
  paramForm10: FormGroup;
  paramForm11: FormGroup;
  paramForm12: FormGroup;
  paramForm13: FormGroup;
  paramForm14: FormGroup;
  paramForm15: FormGroup;

  businessConfig: BusinessConfig; //

  showFiller = false;
  step = 0;
  
  iIdNegocio: number;
  business: Business;
  businessDetail: BusinessDetail[];

  userName: string;
  tipoParam: string;

  check0 = false;
  checked = false;
  colorInput = 'primary';
  
  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }
  constructor(
    private route: ActivatedRoute,
    private businessService: BusinessService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    //this.buildForm();
  }

   // Creación del formulario desde un json
   /*private buildForm() {
    this.paramForm0 = this.formBuilder.group({
        bIsAppConfig: new FormControl(''),
        sData: new FormControl(''),
        sParametro: new FormControl('')
    });

    this.paramForm1 = this.formBuilder.group({
      bIsAppConfig: new FormControl(''),
      sData: new FormControl(''),
      sParametro: new FormControl('')
    });

    this.paramForm2 = this.formBuilder.group({
        bIsAppConfig: new FormControl(''),
        sData: new FormControl(''),
        sParametro: new FormControl('')
    });

    this.paramForm3 = this.formBuilder.group({
      bIsAppConfig: new FormControl(''),
      sData: new FormControl(''),
      sParametro: new FormControl('')
    });

    this.paramForm4 = this.formBuilder.group({
      bIsAppConfig: new FormControl(''),
      sData: new FormControl(''),
      sParametro: new FormControl('')
    });

    this.paramForm5 = this.formBuilder.group({
      bIsAppConfig: new FormControl(''),
      sData: new FormControl(''),
      sParametro: new FormControl('')
    });

    this.paramForm6 = this.formBuilder.group({
      bIsAppConfig: new FormControl(''),
      sData: new FormControl(''),
      sParametro: new FormControl('')
    });

    this.paramForm7 = this.formBuilder.group({
      bIsAppConfig: new FormControl(''),
      sData: new FormControl(''),
      sParametro: new FormControl('')
    });

    this.paramForm8 = this.formBuilder.group({
      bIsAppConfig: new FormControl(''),
      sData: new FormControl(''),
      sParametro: new FormControl('')
    });

    this.paramForm9 = this.formBuilder.group({
      bIsAppConfig: new FormControl(''),
      sData: new FormControl(''),
      sParametro: new FormControl('')
    });

    this.paramForm10 = this.formBuilder.group({
      bIsAppConfig: new FormControl(''),
      sData: new FormControl(''),
      sParametro: new FormControl('')
    });

    this.paramForm11 = this.formBuilder.group({
      bIsAppConfig: new FormControl(''),
      sData: new FormControl(''),
      sParametro: new FormControl('')
    });

    this.paramForm12 = this.formBuilder.group({
      bIsAppConfig: new FormControl(''),
      sData: new FormControl(''),
      sParametro: new FormControl('')
    });

    this.paramForm13 = this.formBuilder.group({
      bIsAppConfig: new FormControl(''),
      sData: new FormControl(''),
      sParametro: new FormControl('')
    });

    this.paramForm14 = this.formBuilder.group({
      bIsAppConfig: new FormControl(''),
      sData: new FormControl(''),
      sParametro: new FormControl('')
    });

    this.paramForm15 = this.formBuilder.group({
      bIsAppConfig: new FormControl(''),
      sData: new FormControl(''),
      sParametro: new FormControl('')
    });
  }*/

  ngOnInit(): void {
    this.iIdNegocio = (Number(this.route.snapshot.paramMap.get('idNegocio')));
    this.userName = this.route.snapshot.paramMap.get('userName');
    this.tipoParam = this.route.snapshot.paramMap.get('tipoParam');
    this.businessService.getBusinessConfig(this.iIdNegocio).subscribe(business => {
      this.business = business;
      this.businessDetail = business.detalle;

      if (this.business.resultDto.iResultado === 'Ok') {

        for(let i = 0; i < this.businessDetail.length; i++) {
          if (this.businessDetail[i].sData === 1) {
            this.businessDetail[i].sData = true;
          } else if(this.businessDetail[i].sData === 0) {
            this.businessDetail[i].sData = false;
          }
        }

        this.paramForm0.patchValue({
          bIsAppConfig: this.businessDetail[0].bIsAppConfig,
          sData: this.businessDetail[0].sData,
          sParametro: this.businessDetail[0].sParametro
        });

        this.paramForm1.patchValue({
          bIsAppConfig: this.businessDetail[1].bIsAppConfig,
          sData: this.businessDetail[1].sData,
          sParametro: this.businessDetail[1].sParametro
        });

        this.paramForm2.patchValue({
          bIsAppConfig: this.businessDetail[2].bIsAppConfig,
          sData: this.businessDetail[2].sData,
          sParametro: this.businessDetail[2].sParametro
        });

        this.paramForm3.patchValue({
          bIsAppConfig: this.businessDetail[3].bIsAppConfig,
          sData: this.businessDetail[3].sData,
          sParametro: this.businessDetail[3].sParametro
        });

        this.paramForm4.patchValue({
          bIsAppConfig: this.businessDetail[4].bIsAppConfig,
          sData: "#" + this.businessDetail[4].sData,
          sParametro: this.businessDetail[4].sParametro
        });

        this.paramForm5.patchValue({
          bIsAppConfig: this.businessDetail[5].bIsAppConfig,
          sData: this.businessDetail[5].sData,
          sParametro: this.businessDetail[5].sParametro
        });

        this.paramForm6.patchValue({
          bIsAppConfig: this.businessDetail[6].bIsAppConfig,
          sData: this.businessDetail[6].sData,
          sParametro: this.businessDetail[6].sParametro
        });

        this.paramForm7.patchValue({
          bIsAppConfig: this.businessDetail[7].bIsAppConfig,
          sData: this.businessDetail[7].sData,
          sParametro: this.businessDetail[7].sParametro
        });

        this.paramForm8.patchValue({
          bIsAppConfig: this.businessDetail[8].bIsAppConfig,
          sData: this.businessDetail[8].sData,
          sParametro: this.businessDetail[8].sParametro
        });

        this.paramForm9.patchValue({
          bIsAppConfig: this.businessDetail[9].bIsAppConfig,
          sData: this.businessDetail[9].sData,
          sParametro: this.businessDetail[9].sParametro
        });

        this.paramForm10.patchValue({
          bIsAppConfig: this.businessDetail[10].bIsAppConfig,
          sData: this.businessDetail[10].sData,
          sParametro: this.businessDetail[10].sParametro
        });

        this.paramForm11.patchValue({
          bIsAppConfig: this.businessDetail[11].bIsAppConfig,
          sData: this.businessDetail[11].sData,
          sParametro: this.businessDetail[11].sParametro
        });

        this.paramForm12.patchValue({
          bIsAppConfig: this.businessDetail[12].bIsAppConfig,
          sData: this.businessDetail[12].sData,
          sParametro: this.businessDetail[12].sParametro
        });

        this.paramForm13.patchValue({
          bIsAppConfig: this.businessDetail[13].bIsAppConfig,
          sData: this.businessDetail[13].sData,
          sParametro: this.businessDetail[13].sParametro
        });

        this.paramForm14.patchValue({
          bIsAppConfig: this.businessDetail[14].bIsAppConfig,
          sData: this.businessDetail[14].sData,
          sParametro: this.businessDetail[14].sParametro
        });

        this.paramForm15.patchValue({
          bIsAppConfig: this.businessDetail[15].bIsAppConfig,
          sData: this.businessDetail[15].sData,
          sParametro: this.businessDetail[15].sParametro
        });
      } else {
        alert(this.business.resultDto.sDetalle);
      }
    });
  }

  // Function de inicio de sesion
  updateParameter(event: Event, form: FormGroup){
    event.preventDefault();
    if (form.valid) {

      if(form.value.sData == true) {
          form.value.sData = 1;
      } else if(form.value.sData == false) {
          form.value.sData = 0;
      } else if(form.value.sData.includes("#")) {
          let color = form.value.sData.split("#");
          form.value.sData = color[1];
      }

        const setBusinessDetailAux: BusinessDetail = {
          sParametro: form.value.sParametro,
          bIsAppConfig: form.value.bIsAppConfig,
          iIdNegocio: this.iIdNegocio,
          sData: form.value.sData,
          sAgrupador: form.value.sAgrupador,
          sTexto: form.value.sTexto,
          sTipo: form.value.sTipo
      };

      this.businessService.setBusinessConfig(setBusinessDetailAux).subscribe(businessConfig => {
        this.businessConfig = businessConfig;
        if (this.businessConfig.resultDto.iResultado === 'Ok'){
          alert(this.businessConfig.resultDto.sDetalle);
          window.location.reload();
        }else{
          alert(this.businessConfig.detalle);
        }
      });
  }
}

  // Funcion de cierre de sesion
  logoutSession(){
    this.router.navigate(['login']);
  }

  // Function for method on construction
  noDisponible() {
    alert("Módulo en construcción.");
  }

}