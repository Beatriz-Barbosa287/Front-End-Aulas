//rotas que não precisa passar o ID (GET e POST)

import { getAllUsuario } from "@/controllers/UsuarioController";

export async function GET(){
    try {
        const data = await getAllUsuario();//chama o controlador
        
    } catch (error) {
        
    }
}
