import { Result } from '../result/result.model';

export interface Login {
    detalle: LoginDetail;
    resultDto: Result;
}

export interface LoginDetail {
    bDosFactoresActivo: number;
    dFechaUltimoLogin: string;
    iIdMarca: number;
    iIdNegocio: number;
    iIdRol: number;
    iIdUsuario: number;
    sCorreoValida: string;
    sPassMd5: string;
    sTelefonoValida: string;
    sToken: string;
    sUltimo2Fact: string;
    sUsuario: string;
}