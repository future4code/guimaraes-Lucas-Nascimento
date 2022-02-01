import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardGrande/CardGrande';


function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande
          imagem=""  //caminho esta correto porem a aplicação n esta carregando.
          nome="Lucas Alberty"
          descricao="Oi, eu sou o Lucas. Sou um aluno da Labenu. Adoro jogar games e assistir animes."
        />

        <ImagemButton
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png"
          texto="Ver mais"
        />
      </div>

      <div className='links'> {/* Por algum motivo que não tenho idea do qual seja o meu componente pega a estilização do CardGrande */}
        <CardPequeno
          imagem="https://cdn-icons.flaticon.com/png/512/3178/premium/3178158.png?token=exp=1643328286~hmac=18fd8f9a68324ce78548b3f5e65eb28c"
          link="Email: lucasalbetyborges@gmail.com"
        />
      </div>



      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png"
          nome="Estagio em desenvolvimento mobile"
          descricao="Estagio com foco em desenvolvimento mobile usando react native."
        />

        <CardGrande
          imagem="https://imagens.canaltech.com.br/empresas/4418.400.jpg"
          nome="NASA"
          descricao="Metendo o louco."
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

        <ImagemButton
          imagem="https://cdn-icons-png.flaticon.com/512/174/174857.png"
          texto="Linkedin"
        />

      </div>
    </div>
  );
}

export default App;
