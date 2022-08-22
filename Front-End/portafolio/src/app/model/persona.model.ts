export class persona{
    
    id: number;
    nombre: string;
    apellido: string;
    img: string;
    banner: string;
    sobreMy: string;
    profesion: string;

    constructor(nombre: string, apellido: string, img: string, banner: string, sobreMy: string, profesion: string){
        this.nombre = nombre;
        this.apellido = apellido;
        this.img = img;
        this.banner = banner;
        this.sobreMy = sobreMy;
        this.profesion = profesion;
    }
}