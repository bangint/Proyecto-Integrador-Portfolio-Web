export class Proyecto{
    id?: number;
    titulo: string;
    PDescripcion: string;
    img: string;

    constructor(titulo: string, PDescripcion: string, img: string){
        this.titulo = titulo;
        this.PDescripcion = PDescripcion;
        this.img = img;
    }
}