export interface RcaForm {
    an_fabricatie: string,
    capacitate_cilindrica: string,
    categorie: string,
    marca: string,
    masa_maxima_autorizata: string,
    mode: string,
    numar_identificare_sasiu: string,
    numar_inmatriculare: string,
    numar_locuri: number,
    putere: number,
    serie_carte_auto: string,
    servicii_extra: string[],
    stare_inmatriculare: string,
    tip_utilizare?: string,
    utilizare_specifica?: string
}