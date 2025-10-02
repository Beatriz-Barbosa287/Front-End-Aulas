//classe de modelagem de dados para Usuários

import mongoose, { Document, Model, Schema } from "mongoose";

export interface IEquipamento extends Document{
    _id: string;
    modelo:string;
    marca:string;
    localizacao:string;
    status: string;
    numSerie:string
}

const EquipamentoSchema:Schema<IEquipamento> = new Schema({
    modelo: {type: String, required: true},
    marca: {type: String, required: true},
    status: {type: String, enum: ["Ativo", "Inativo"], default: "ativo"},
    numSerie: {type: String, required: true, unique:true},
    localizacao: {type: String, required: true}
});

//toMap // FromMap
const Equipamento: Model<IEquipamento> = mongoose.models.User 
|| mongoose.model<IEquipamento>("Equipamento", EquipamentoSchema);

export default Equipamento;
