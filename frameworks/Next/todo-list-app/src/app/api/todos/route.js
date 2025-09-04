//criar as funções GET e POST para a api de Tarefas
import connectMongo from "@/services/mongodb";
import Todo from "@/models/Todo";

import { NextResponse } from "next/server";


export async function GET() {
    try {
        await connectMongo();
        const tarefas = await Todo.find({}); //busca todas as tarefas e ordena por data de criação (mais recentes primeiro)
        return new NextResponse.json({success: false, data: tarefas});
    } catch (error) {
        return new NextResponse.json({success: false});
    }
}

export async function POST(req) {
    try {
        await connectMongo();
        const body = await req.json();//extrai o corpo da requisição
        const novaTarefa = await Todo.create(data);//cria uma nova tarefa com os dados fornecidos
        return NextResponse.json({success: true, data: tarefa});
    } catch (error) {
        return NextResponse.json({success: false});//retorna sucesso falso em caso de erro
    }
}