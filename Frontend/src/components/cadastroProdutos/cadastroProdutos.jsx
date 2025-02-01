import React from "react";
import "./cadastroProdutos.css";

function CadastroProdutos() {
  return (
    <div className="cadastro-produtos">
      <h1>Cadastro de Produtos</h1>

      <form className="form-produto">
        <div className="input-group">
          <label htmlFor="nomeProduto">Nome do Produto</label>
          <input type="text" id="nomeProduto" placeholder="Digite o nome do produto" />
        </div>

        <div className="input-group">
          <label htmlFor="descricao">Descrição</label>
          <input type="text" id="descricao" placeholder="Ex: Batata-doce" />
        </div>

        <div className="input-group">
          <label htmlFor="preco">Preço (R$)</label>
          <input type="number" id="preco" placeholder="0,00" />
        </div>

        <div className="input-group">
          <label htmlFor="categoria">Categoria</label>
          <select id="categoria">
            <option>Selecione a categoria</option>
            <option>Frutas</option>
            <option>Verduras</option>
            <option>Carnes</option>
          </select>
        </div>

        <div className="input-group">
          <label htmlFor="dataValidade">Data de Validade</label>
          <input type="date" id="dataValidade" />
        </div>

        <div className="button-group">
          <button type="submit" className="btn salvar">Salvar</button>
          <button type="reset" className="btn cancelar">Cancelar</button>
        </div>
      </form>

      <footer>
        <p>© SuperSelect - Todos os Direitos Reservados</p>
      </footer>
    </div>
  );
}

export default CadastroProdutos;
