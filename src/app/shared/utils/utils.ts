export class ConstantesConexion {
    // Constantes finales desarrollo
   /* static readonly PROTOCOL: string = 'http';
    static readonly HOST_URL: string = '34.234.225.159:8080';
    static readonly PORT: string = '8080';
    static readonly CTXTFAC: string = 'RestFull_Rewards-1.0/rest/rewards';
    static readonly CTXTECOM: string = 'RestFull_ECOMMERCE-1.0/rest/ECOMMERCE';*/

    // Constantes finales https para el llamado a servicios
    static readonly PROTOCOL: string = 'https';
    static readonly HOST_URL: string = 'backconfigrewards.automatizate.mx';
    static readonly PORT: string = '8080';
    static readonly CTXTFAC: string = 'services';
    static readonly CTXTECOM: string = 'services';
}

export class ConstantesMetodos {
    static readonly LOGIN_NEGOCIO = 'loginNegocioWeb';
    static readonly TOKEN = 'token2Factores';
    static readonly CONFIG_NEGOCIO_APP = 'configuracionApp';
    static readonly CONFIG_NEGOCIO = 'configuracionNegocios';
}