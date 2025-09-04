//Indicar que é um componente do REACT
'use client';

import { useEffect, useState } from "react";

export default function Home() {
  const [tarefas, setTarefas] = useState([]); //manipulador da lista de tarefas
  const [newTarefa, setNewTarefa] = useState(""); //manipulador do input do formulário de nova tarefa


//useEffect 

useEffect(() => {fetchTarefas();},[]);
//UseEffect para preencher as listas de tarefas enquanto carrega a página 

//metodo para buscar as tarefas na API mongoDB
const fetchTarefas = async () => {
  const resp = await fetch ('/api/todos');
  const data = await resp.json();
  setTarefas(data.data);
}

async function addTarefa() {
  const resp = await fetch('/api/todos', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ title: newTarefa}), //envia o título e o status da nova tarefa

    });
    const data = await resp.json();
    setTarefas([...tarefas, data.data]); //atualiza a lista de tarefas com a nova tarefa
    setNewTarefa(""); //limpa o input do formulário
  }
}
