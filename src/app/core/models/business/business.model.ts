import { Result } from '../result/result.model';

export interface Business {
    detalle: BusinessDetail[];
    resultDto: Result;
}

export interface BusinessDetail {
    bIsAppConfig: boolean;
    iIdNegocio: number;
    sAgrupador: string;
    sData: any;
    sParametro: string;
    sTexto: string;
    sTipo: string;
}

export interface BusinessConfig {
    detalle: string;
    resultDto: Result;
}

/**
 * 
 * {
    "detalle": [
        {
            "bIsAppConfig": true,
            "iIdNegocio": 1,
            "sAgrupador": "MONTO",
            "sData": "0",
            "sParametro": "B_MUESTRAMONTOPESOS",
            "sTexto": null,
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
            "sTexto": null,
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
}

MONTO
PUNTOS
LOGIN
COLOR
MENSAJES
REGISTRO
INICIAL
IMAGENES

 */
