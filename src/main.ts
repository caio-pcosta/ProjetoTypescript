import { elemento } from  './dom.js';
import { tarefas } from './dados.js';

const nomeDoSistema: string = "TaskFlow";
const versao: string = "0.0.1";
const hoje: string = new Date().toLocaleDateString("pt-BR");
const autor = "Turma CCO -A ";

elemento("nome-do-sistema").textContent = nomeDoSistema;
elemento("versao").textContent = `v${versao}`;
elemento("data-de-hoje").textContent = hoje;
console.log(`TASKFLOW iniciado.Autor: npm${autor}`);

const lista = elemento("lista");
for (const tarefa of tarefas) {
    const item = document.createElement("li");
    item.className = `tarefa tarefa--${tarefa.prioridade}`;
    const titulo = document.createElement("h3");
    titulo.className = "tarefa__titulo";
    titulo.textContent = `#${tarefa.id} ${tarefa.titulo}`;
    const etiqueta = document.createElement("span");
    etiqueta.className = `etiqueta etiqueta --${tarefa.prioridade}`;
    etiqueta.textContent = tarefa.prioridade;
    item.append(titulo, etiqueta);
    lista.append(item);

    
    lista.appendChild(item);
}