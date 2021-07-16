import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { BusinessService } from '../../../core/services/business/business.service';
import { Business, BusinessDetail, BusinessConfig } from '../../../core/models/business/business.model';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';

interface CategoryParam {
  value: string;
  viewValue: string;
}

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
  paramForm16: FormGroup;
  paramForm17: FormGroup;
  paramForm18: FormGroup;
  paramForm19: FormGroup;
  paramForm20: FormGroup;
  paramForm21: FormGroup;
  paramForm22: FormGroup;
  paramForm23: FormGroup;

  showModal: boolean;
  colorModal: boolean;
  imgUrl: any;
  typeModal: boolean;

  categoryParams: CategoryParam[] = [
    {value: 'Color', viewValue: 'Color'},
    {value: 'Inicial', viewValue: 'Inicial'},
    {value: 'Imagenes', viewValue: 'Imagenes'},
    {value: 'Login', viewValue: 'Login'},
    // {value: 'Montos', viewValue: 'Montos'},
    {value: 'Puntos', viewValue: 'Puntos'},
    {value: 'Registro', viewValue: 'Registro'},
    {value: 'Vigencia', viewValue: 'Vigencia'}
  ];

getDiv(){
  this.router.navigate(['/negocios'], {fragment: 'hola'});
}

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
    private router: Router,
    private dom: DomSanitizer
  ) {
    this.buildForm();
  }

   // Creación del formulario desde un json
   private buildForm() {
   this.paramForm0 = this.formBuilder.group({
        bIsAppConfig: new FormControl(''),
        sData: new FormControl(''),
        sParametro: new FormControl(''),
        sAgrupador: new FormControl(''),
        sTexto: new FormControl('')
    });

   this.paramForm1 = this.formBuilder.group({
      bIsAppConfig: new FormControl(''),
      sData: new FormControl(''),
      sParametro: new FormControl(''),
      sAgrupador: new FormControl(''),
      sTexto: new FormControl('')
    });

   this.paramForm2 = this.formBuilder.group({
        bIsAppConfig: new FormControl(''),
        sData: new FormControl(''),
        sParametro: new FormControl(''),
        sAgrupador: new FormControl(''),
        sTexto: new FormControl('')
    });

   this.paramForm3 = this.formBuilder.group({
      bIsAppConfig: new FormControl(''),
      sData: new FormControl(''),
      sParametro: new FormControl(''),
      sAgrupador: new FormControl(''),
      sTexto: new FormControl('')
    });

   this.paramForm4 = this.formBuilder.group({
      bIsAppConfig: new FormControl(''),
      sData: new FormControl(''),
      sParametro: new FormControl(''),
      sAgrupador: new FormControl(''),
      sTexto: new FormControl('')
    });

   this.paramForm5 = this.formBuilder.group({
      bIsAppConfig: new FormControl(''),
      sData: new FormControl(''),
      sParametro: new FormControl(''),
      sAgrupador: new FormControl(''),
      sTexto: new FormControl('')
    });

   this.paramForm6 = this.formBuilder.group({
      bIsAppConfig: new FormControl(''),
      sData: new FormControl(''),
      sParametro: new FormControl(''),
      sAgrupador: new FormControl(''),
      sTexto: new FormControl('')
    });

   this.paramForm7 = this.formBuilder.group({
      bIsAppConfig: new FormControl(''),
      sData: new FormControl(''),
      sParametro: new FormControl(''),
      sAgrupador: new FormControl(''),
      sTexto: new FormControl('')
    });

   this.paramForm8 = this.formBuilder.group({
      bIsAppConfig: new FormControl(''),
      sData: new FormControl(''),
      sParametro: new FormControl(''),
      sAgrupador: new FormControl(''),
      sTexto: new FormControl('')
    });

   this.paramForm9 = this.formBuilder.group({
      bIsAppConfig: new FormControl(''),
      sData: new FormControl(''),
      sParametro: new FormControl(''),
      sAgrupador: new FormControl(''),
      sTexto: new FormControl('')
    });

   this.paramForm10 = this.formBuilder.group({
      bIsAppConfig: new FormControl(''),
      sData: new FormControl(''),
      sParametro: new FormControl(''),
      sAgrupador: new FormControl(''),
      sTexto: new FormControl('')
    });

   this.paramForm11 = this.formBuilder.group({
      bIsAppConfig: new FormControl(''),
      sData: new FormControl(''),
      sParametro: new FormControl(''),
      sAgrupador: new FormControl(''),
      sTexto: new FormControl('')
    });

   this.paramForm12 = this.formBuilder.group({
      bIsAppConfig: new FormControl(''),
      sData: new FormControl(''),
      sParametro: new FormControl(''),
      sAgrupador: new FormControl(''),
      sTexto: new FormControl('')
    });

   this.paramForm13 = this.formBuilder.group({
      bIsAppConfig: new FormControl(''),
      sData: new FormControl(''),
      sParametro: new FormControl(''),
      sAgrupador: new FormControl(''),
      sTexto: new FormControl('')
    });

   this.paramForm14 = this.formBuilder.group({
      bIsAppConfig: new FormControl(''),
      sData: new FormControl(''),
      sParametro: new FormControl(''),
      sAgrupador: new FormControl(''),
      sTexto: new FormControl('')
    });

   this.paramForm15 = this.formBuilder.group({
      bIsAppConfig: new FormControl(''),
      sData: new FormControl(''),
      sParametro: new FormControl(''),
      sAgrupador: new FormControl(''),
      sTexto: new FormControl('')
    });

   this.paramForm16 = this.formBuilder.group({
      bIsAppConfig: new FormControl(''),
      sData: new FormControl(''),
      sParametro: new FormControl(''),
      sAgrupador: new FormControl(''),
      sTexto: new FormControl('')
    });

   this.paramForm17 = this.formBuilder.group({
      bIsAppConfig: new FormControl(''),
      sData: new FormControl(''),
      sParametro: new FormControl(''),
      sAgrupador: new FormControl(''),
      sTexto: new FormControl('')
    });

   this.paramForm18 = this.formBuilder.group({
      bIsAppConfig: new FormControl(''),
      sData: new FormControl(''),
      sParametro: new FormControl(''),
      sAgrupador: new FormControl(''),
      sTexto: new FormControl('')
    });

   this.paramForm19 = this.formBuilder.group({
      bIsAppConfig: new FormControl(''),
      sData: new FormControl(''),
      sParametro: new FormControl(''),
      sAgrupador: new FormControl(''),
      sTexto: new FormControl('')
    });

   this.paramForm20 = this.formBuilder.group({
      bIsAppConfig: new FormControl(''),
      sData: new FormControl(''),
      sParametro: new FormControl(''),
      sAgrupador: new FormControl(''),
      sTexto: new FormControl('')
    });

   this.paramForm21 = this.formBuilder.group({
      bIsAppConfig: new FormControl(''),
      sData: new FormControl(''),
      sParametro: new FormControl(''),
      sAgrupador: new FormControl(''),
      sTexto: new FormControl('')
    });

   this.paramForm22 = this.formBuilder.group({
      bIsAppConfig: new FormControl(''),
      sData: new FormControl(''),
      sParametro: new FormControl(''),
      sAgrupador: new FormControl(''),
      sTexto: new FormControl('')
    });

   this.paramForm23 = this.formBuilder.group({
      bIsAppConfig: new FormControl(''),
      sData: new FormControl(''),
      sParametro: new FormControl(''),
      sAgrupador: new FormControl(''),
      sTexto: new FormControl('')
    });
  }

  ngOnInit(): void {
    this.iIdNegocio = (Number(this.route.snapshot.paramMap.get('idNegocio')));
    this.userName = this.route.snapshot.paramMap.get('userName');
    this.tipoParam = 'Inicial';
    this.businessService.getBusinessConfig(this.iIdNegocio).subscribe(business => {
      this.business = business;
      /*this.business = {
        "detalle": [
            {
                "bIsAppConfig": true,
                "iIdNegocio": 1,
                "sAgrupador": "MONTO",
                "sData": "0",
                "sParametro": "B_MUESTRAMONTOPESOS",
                "sTexto": "Prueba",
                "sTipo": null
            },
            {
                "bIsAppConfig": false,
                "iIdNegocio": 1,
                "sAgrupador": "PUNTOS",
                "sData": "1",
                "sParametro": "B_NOTIFCADUCIDADPUNTOS",
                "sTexto": null,
                "sTipo": null
            },
            {
                "bIsAppConfig": true,
                "iIdNegocio": 1,
                "sAgrupador": "LOGIN",
                "sData": "1",
                "sParametro": "B_PEDIRPASSWORD",
                "sTexto": null,
                "sTipo": null
            },
            {
                "bIsAppConfig": true,
                "iIdNegocio": 1,
                "sAgrupador": "LOGIN",
                "sData": "1",
                "sParametro": "B_VALIDARMAIL",
                "sTexto": null,
                "sTipo": null
            },
            {
                "bIsAppConfig": true,
                "iIdNegocio": 1,
                "sAgrupador": "LOGIN",
                "sData": "1",
                "sParametro": "B_VALIDARTELEFONO",
                "sTexto": null,
                "sTipo": null
            },
            {
                "bIsAppConfig": true,
                "iIdNegocio": 1,
                "sAgrupador": "COLOR",
                "sData": "000000",
                "sParametro": "COLOR_FONDO",
                "sTexto": null,
                "sTipo": null
            },
            {
                "bIsAppConfig": false,
                "iIdNegocio": 1,
                "sAgrupador": "PUNTOS",
                "sData": "5",
                "sParametro": "DIASNOTIFCADUCIDADPUNTOS",
                "sTexto": null,
                "sTipo": null
            },
            {
                "bIsAppConfig": false,
                "iIdNegocio": 1,
                "sAgrupador": "PUNTOS",
                "sData": "360",
                "sParametro": "DIASVIGENCIA",
                "sTexto": null,
                "sTipo": null
            },
            {
                "bIsAppConfig": false,
                "iIdNegocio": 1,
                "sAgrupador": "MENSAJES",
                "sData": "Tus puntos estan por caducar, usalos ahora",
                "sParametro": "MENSAJENOTIFCADUCIDAD",
                "sTexto": null,
                "sTipo": null
            },
            {
                "bIsAppConfig": false,
                "iIdNegocio": 1,
                "sAgrupador": "MONTO",
                "sData": ".1",
                "sParametro": "PESOSXPUNTOS",
                "sTexto": null,
                "sTipo": null
            },
            {
                "bIsAppConfig": false,
                "iIdNegocio": 1,
                "sAgrupador": "PUNTOS",
                "sData": "10",
                "sParametro": "PUNTOSXPESOS",
                "sTexto": null,
                "sTipo": null
            },
            {
                "bIsAppConfig": true,
                "iIdNegocio": 1,
                "sAgrupador": "REGISTRO",
                "sData": "0",
                "sParametro": "REGISTRO_CODIGOPOSTAL",
                "sTexto": null,
                "sTipo": null
            },
            {
                "bIsAppConfig": true,
                "iIdNegocio": 1,
                "sAgrupador": "REGISTRO",
                "sData": "1",
                "sParametro": "REGISTRO_CORREO",
                "sTexto": null,
                "sTipo": null
            },
            {
                "bIsAppConfig": true,
                "iIdNegocio": 1,
                "sAgrupador": "REGISTRO",
                "sData": "1",
                "sParametro": "REGISTRO_DIRECCION",
                "sTexto": null,
                "sTipo": null
            },
            {
                "bIsAppConfig": true,
                "iIdNegocio": 1,
                "sAgrupador": "REGISTRO",
                "sData": "1",
                "sParametro": "REGISTRO_ESTADO",
                "sTexto": null,
                "sTipo": null
            },
            {
                "bIsAppConfig": true,
                "iIdNegocio": 1,
                "sAgrupador": "REGISTRO",
                "sData": "1",
                "sParametro": "REGISTRO_NOMBRE",
                "sTexto": null,
                "sTipo": null
            },
            {
                "bIsAppConfig": true,
                "iIdNegocio": 1,
                "sAgrupador": "REGISTRO",
                "sData": "1",
                "sParametro": "REGISTRO_TELEFONO",
                "sTexto": null,
                "sTipo": null
            },
            {
                "bIsAppConfig": true,
                "iIdNegocio": 1,
                "sAgrupador": "INICIAL",
                "sData": "Nombre de menu",
                "sParametro": "SNOMBRE_MENU_X",
                "sTexto": "Nombre de prueba",
                "sTipo": null
            },
            {
                "bIsAppConfig": true,
                "iIdNegocio": 1,
                "sAgrupador": "INICIAL",
                "sData": "Acerca De Bello",
                "sParametro": "TXT_BOTON_ACERCADE",
                "sTexto": null,
                "sTipo": null
            },
            {
                "bIsAppConfig": true,
                "iIdNegocio": 1,
                "sAgrupador": "INICIAL",
                "sData": "http://automatizate.mx/aviso-de-privacidad/",
                "sParametro": "URL_AVISOPRIVACIDAD",
                "sTexto": null,
                "sTipo": null
            },
            {
                "bIsAppConfig": true,
                "iIdNegocio": 1,
                "sAgrupador": "IMAGENES",
                "sData": "https://organicoynatural.mx/RewardsImg/AnversoTarjeta.png",
                "sParametro": "URL_DISENO_TARJETA",
                "sTexto": null,
                "sTipo": null
            },
            {
                "bIsAppConfig": true,
                "iIdNegocio": 1,
                "sAgrupador": "IMAGENES",
                "sData": "https://organicoynatural.mx/RewardsImg/ReversoTarjeta.jpeg",
                "sParametro": "URL_DISENO_TARJETA_REVERSO",
                "sTexto": null,
                "sTipo": null
            },
            {
                "bIsAppConfig": true,
                "iIdNegocio": 1,
                "sAgrupador": "INICIAL",
                "sData": "https://organicoynatural.mx/RewardsImg/logobello.png",
                "sParametro": "URL_LOGOTIPO",
                "sTexto": null,
                "sTipo": null
            },
            {
                "bIsAppConfig": true,
                "iIdNegocio": 1,
                "sAgrupador": "INICIAL",
                "sData": "https://www.instagram.com/belloplacer/",
                "sParametro": "URL_SOBRE_NEGOCIO",
                "sTexto": null,
                "sTipo": null
            }
        ],
        "resultDto": {
            "iResultado": "Ok",
            "sDetalle": "Consulta exitosa"
        }
    };*/

      this.businessDetail = this.business.detalle;
      
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
          sParametro: this.businessDetail[0].sParametro,
          sAgrupador: this.businessDetail[0].sAgrupador,
          sTexto: this.businessDetail[0].sTexto
        });

        // alert(this.businessDetail[0].sTexto);

        this.paramForm1.patchValue({
          bIsAppConfig: this.businessDetail[1].bIsAppConfig,
          sData: this.businessDetail[1].sData,
          sParametro: this.businessDetail[1].sParametro,
          sAgrupador: this.businessDetail[1].sAgrupador,
          sTexto: this.businessDetail[1].sTexto
        });

        this.paramForm2.patchValue({
          bIsAppConfig: this.businessDetail[2].bIsAppConfig,
          sData: this.businessDetail[2].sData,
          sParametro: this.businessDetail[2].sParametro,
          sAgrupador: this.businessDetail[2].sAgrupador,
          sTexto: this.businessDetail[2].sTexto
        });

        this.paramForm3.patchValue({
          bIsAppConfig: this.businessDetail[3].bIsAppConfig,
          sData: this.businessDetail[3].sData,
          sParametro: this.businessDetail[3].sParametro,
          sAgrupador: this.businessDetail[3].sAgrupador,
          sTexto: this.businessDetail[3].sTexto
        });

        this.paramForm4.patchValue({
          bIsAppConfig: this.businessDetail[4].bIsAppConfig,
          sData: "#" + this.businessDetail[4].sData,
          sParametro: this.businessDetail[4].sParametro,
          sAgrupador: this.businessDetail[4].sAgrupador,
          sTexto: this.businessDetail[4].sTexto
        });

        this.paramForm5.patchValue({
          bIsAppConfig: this.businessDetail[5].bIsAppConfig,
          sData: this.businessDetail[5].sData,
          sParametro: this.businessDetail[5].sParametro,
          sAgrupador: this.businessDetail[5].sAgrupador,
          sTexto: this.businessDetail[5].sTexto
        });

        this.paramForm6.patchValue({
          bIsAppConfig: this.businessDetail[6].bIsAppConfig,
          sData: this.businessDetail[6].sData,
          sParametro: this.businessDetail[6].sParametro,
          sAgrupador: this.businessDetail[6].sAgrupador,
          sTexto: this.businessDetail[6].sTexto
        });

        this.paramForm7.patchValue({
          bIsAppConfig: this.businessDetail[7].bIsAppConfig,
          sData: this.businessDetail[7].sData,
          sParametro: this.businessDetail[7].sParametro,
          sAgrupador: this.businessDetail[7].sAgrupador,
          sTexto: this.businessDetail[7].sTexto
        });

        this.paramForm8.patchValue({
          bIsAppConfig: this.businessDetail[8].bIsAppConfig,
          sData: this.businessDetail[8].sData,
          sParametro: this.businessDetail[8].sParametro,
          sAgrupador: this.businessDetail[8].sAgrupador,
          sTexto: this.businessDetail[8].sTexto
        });

        this.paramForm9.patchValue({
          bIsAppConfig: this.businessDetail[9].bIsAppConfig,
          sData: this.businessDetail[9].sData,
          sParametro: this.businessDetail[9].sParametro,
          sAgrupador: this.businessDetail[9].sAgrupador,
          sTexto: this.businessDetail[9].sTexto
        });

        this.paramForm10.patchValue({
          bIsAppConfig: this.businessDetail[10].bIsAppConfig,
          sData: this.businessDetail[10].sData,
          sParametro: this.businessDetail[10].sParametro,
          sAgrupador: this.businessDetail[10].sAgrupador,
          sTexto: this.businessDetail[10].sTexto
        });

        this.paramForm11.patchValue({
          bIsAppConfig: this.businessDetail[11].bIsAppConfig,
          sData: this.businessDetail[11].sData,
          sParametro: this.businessDetail[11].sParametro,
          sAgrupador: this.businessDetail[11].sAgrupador,
          sTexto: this.businessDetail[11].sTexto
        });

        this.paramForm12.patchValue({
          bIsAppConfig: this.businessDetail[12].bIsAppConfig,
          sData: this.businessDetail[12].sData,
          sParametro: this.businessDetail[12].sParametro,
          sAgrupador: this.businessDetail[12].sAgrupador,
          sTexto: this.businessDetail[12].sTexto
        });

        this.paramForm13.patchValue({
          bIsAppConfig: this.businessDetail[13].bIsAppConfig,
          sData: this.businessDetail[13].sData,
          sParametro: this.businessDetail[13].sParametro,
          sAgrupador: this.businessDetail[13].sAgrupador,
          sTexto: this.businessDetail[13].sTexto
        });

        this.paramForm14.patchValue({
          bIsAppConfig: this.businessDetail[14].bIsAppConfig,
          sData: this.businessDetail[14].sData,
          sParametro: this.businessDetail[14].sParametro,
          sAgrupador: this.businessDetail[14].sAgrupador,
          sTexto: this.businessDetail[14].sTexto
        });

        this.paramForm15.patchValue({
          bIsAppConfig: this.businessDetail[15].bIsAppConfig,
          sData: this.businessDetail[15].sData,
          sParametro: this.businessDetail[15].sParametro,
          sAgrupador: this.businessDetail[15].sAgrupador,
          sTexto: this.businessDetail[15].sTexto
        });

        this.paramForm16.patchValue({
          bIsAppConfig: this.businessDetail[16].bIsAppConfig,
          sData: this.businessDetail[16].sData,
          sParametro: this.businessDetail[16].sParametro,
          sAgrupador: this.businessDetail[16].sAgrupador,
          sTexto: this.businessDetail[16].sTexto
        });

        this.paramForm17.patchValue({
          bIsAppConfig: this.businessDetail[17].bIsAppConfig,
          sData: this.businessDetail[17].sData,
          sParametro: this.businessDetail[17].sParametro,
          sAgrupador: this.businessDetail[17].sAgrupador,
          sTexto: this.businessDetail[17].sTexto
        });

        this.paramForm18.patchValue({
          bIsAppConfig: this.businessDetail[18].bIsAppConfig,
          sData: this.businessDetail[18].sData,
          sParametro: this.businessDetail[18].sParametro,
          sAgrupador: this.businessDetail[18].sAgrupador,
          sTexto: this.businessDetail[18].sTexto
        });

        this.paramForm19.patchValue({
          bIsAppConfig: this.businessDetail[19].bIsAppConfig,
          sData: this.businessDetail[19].sData,
          sParametro: this.businessDetail[19].sParametro,
          sAgrupador: this.businessDetail[19].sAgrupador,
          sTexto: this.businessDetail[19].sTexto
        });

        this.paramForm20.patchValue({
          bIsAppConfig: this.businessDetail[20].bIsAppConfig,
          sData: this.businessDetail[20].sData,
          sParametro: this.businessDetail[20].sParametro,
          sAgrupador: this.businessDetail[20].sAgrupador,
          sTexto: this.businessDetail[20].sTexto
        });

        this.paramForm21.patchValue({
          bIsAppConfig: this.businessDetail[21].bIsAppConfig,
          sData: this.businessDetail[21].sData,
          sParametro: this.businessDetail[21].sParametro,
          sAgrupador: this.businessDetail[21].sAgrupador,
          sTexto: this.businessDetail[21].sTexto
        });

        this.paramForm22.patchValue({
          bIsAppConfig: this.businessDetail[22].bIsAppConfig,
          sData: this.businessDetail[22].sData,
          sParametro: this.businessDetail[22].sParametro,
          sAgrupador: this.businessDetail[22].sAgrupador,
          sTexto: this.businessDetail[22].sTexto
        });

        this.paramForm23.patchValue({
          bIsAppConfig: this.businessDetail[23].bIsAppConfig,
          sData: this.businessDetail[23].sData,
          sParametro: this.businessDetail[23].sParametro,
          sAgrupador: this.businessDetail[23].sAgrupador,
          sTexto: this.businessDetail[23].sTexto
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

      if (form.value.sData == true) {
          form.value.sData = 1;
      } else if (form.value.sData == false) {
          form.value.sData = 0;
      } else if (form.value.sData.includes('#')) {
          let color = form.value.sData.split('#');
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

  // Funcion de seleccion
  select(seleccionado: string) {
    this.tipoParam = seleccionado;
  }

  // Funcion para mostrar el modal
  show(urlImage: string, colorModal: boolean, typeModal: boolean)
  {
    this.typeModal = typeModal;
    this.imgUrl = this.dom.bypassSecurityTrustResourceUrl(urlImage);
    this.colorModal = colorModal;
    this.showModal = true;
  }

  // Funcion para mostrar el modal
  hide()
  {
    this.showModal = false;
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