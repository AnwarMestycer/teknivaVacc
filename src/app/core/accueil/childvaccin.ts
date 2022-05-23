export class Childvaccin {
    full_name!:string;
    id_parent!:number;
    gender!:string;
    constructor(full_name:string, id_parent:number,gender:string){
        this.full_name= full_name;
        this.id_parent=id_parent;
        this.gender=gender;
    }

}
