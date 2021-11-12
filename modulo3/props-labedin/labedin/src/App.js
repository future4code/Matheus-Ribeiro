import React from 'react';
import './App.css';
import foto from './img/foto-minha.jpg';
import f4bank from './img/logo-f4bank.png';
import labenu from './img/labenu.png';
import drogamaxx from './img/drogamaxx.png';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno';
import CardEnorme from './components/CardEnorme/CardEnorme';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande
          imagem={foto}
          nome="Matheus Lima Ribeiro"
          descricao="Aluno de Desenvolvimento Web Full Stack da Labenu. Possuo conhecimentos técnicos em JavaScript, HTML5, CSS3,Git/Github e estou estudando React. Gosto de fazer novas amizades e ajudar meus companheiros de curso. Sinto que, após entrar para o mundo da tecnologia, finalmente me encontrei na vida."
        />

        <ImagemButton
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png"
          texto="Ver mais"
        />

        <CardPequeno
          imagem="https://www.caceres.mt.leg.br/banco-de-imagens/email.png/image"
          texto="Email:"
          descricao="matheuslimaribeiro15@outlook.com"
        />

        <CardPequeno
          imagem="https://i.pinimg.com/736x/96/5c/7e/965c7eedc399211edfd5d59d8ce179e5.jpg"
          texto="Endereço:"
          descricao="Rua dos Bobos, número 0, Valinhos/SP"
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande
          imagem={f4bank}
          nome="F4Bank"
          descricao="Desenvolvedor Front-End."
        />

        <CardGrande
          imagem={drogamaxx}
          nome="Drogamaxx"
          descricao="Farmacêutico Responsavel Técnico."
        />
      </div>

      <div className="page-section-container">
        <h2>Formação Acamêmica</h2>
        <CardEnorme
          imagem={labenu}
          texto="Labenu"
          descricao="A Labenu é uma startup que forma Desenvolvedores Web Full Stack prontos para o mercado de trabalho. São mais de 1000 horas de programação que faz com que seus alunos, ao final do curso, sejam profissionais completos tanto no Back-End quanto no Front-End."
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png"
          texto="Facebook"
        />

        <ImagemButton
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png"
          texto="Twitter"
        />
      </div>
    </div>
  );
}

export default App;