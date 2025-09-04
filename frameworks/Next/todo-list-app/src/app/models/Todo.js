import mongoose from "mongoose";
import { Script } from "vm";

//Construtor de um Obj do da coleção do MongoDB_Tarefas

const TodoSchema = new mongoose.Schema({
    titulo: {
        type: Script,
        required: [true, "O título é obrigatório"], //adiciona mensagem de erro 
        trim: true, //remove espaços em branco antes e depois do texto
        maxlength: [100, "O título não pode passar de 100 caracteres"] //adiciona mensagem de erro
    },
    concluída: {
        type: Boolean,
        default: false //valor padrão
        },
    criadaEm: {
        type: Date,
        default: Date.now //registra automaticamente a data de criação
        }
});

export default mongoose.models.Todo || mongoose.model("Todo", TodoSchema);
//cria um modelo chamado "Todo" com o esquema definido, se já existir, usa o modelo existente