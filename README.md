<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->
<a name="readme-top"></a>
<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->



<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
[![Contributors][contributors-shield]][contributors-url]
[![LinkedIn][linkedin-shield]][linkedin-url]



<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/Lucdomingues/LucTunes/edit/main/README.md">
    <img src="https://github.com/othneildrew/Best-README-Template/raw/master/images/logo.png" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">UltraCar Services</h3>

  <p align="center">
    Projeto com base em uma aplicação de gestão de uma oficina!
    <br />
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Índice</summary>
  <ol>
    <li>
      <a href="#sobre-o-projeto">Sobre o projeto</a>
      <ul>
        <li><a href="#construído-com">Construído com</a></li>
      </ul>
    </li>
    <li>
      <a href="#começando">Começando</a>
      <ul>
        <li><a href="#instalação">Instalação</a></li>
      </ul>
    </li>
    <li><a href="#contribuindo">Contribuindo</a></li>
    <li><a href="#contato">Contato</a></li>
  </ol>
</details>



<!-- SOBRE O PROJETO -->
# Sobre o projeto

## Projeto de Gerenciamento de Serviços

Este projeto foi desenvolvido visando boa prática de programação e __clean code__, onde a aplicação é composta por diferentes componentes. Para a construção do __Front-end__, foi utilizado o framework __React.js__ juntamente com __Context Api__ para gerenciar o estado global.

## Dificultades

O objetivo era a implementação de uma funcionalidade de QrCode para validar e retornar os dados do cliente, não achei uma melhor forma de implementar isso por agora, por isso achei uma outra forma de identificação rápida, que é por meio do cpf, mais gostaria muito de aprender mais sobre a implementação de QrCode's, ficaría bem completa a aplicação!

## Funcionalidades

A aplicação é formada apenas por um Front-end, devido ao tempo proposto, mas está bem funcional, sendo capaz de realizar as seguintes funcionalidades:

- Identificar um cliente pelo seu cpf (que já deve estar salvo no banco de dados), ocorrerá uma validação se o cliente realmente está cadastrado;
- Será redirecionado para a tela do cliente onde o funcionário será capaz de ver as informações do cliente, como (dados do cliente e dos carros em sua posse)
- Nessa mesma tela o funcionário será capaz de adicionar um serviço, incluindo peças se necessário;
- Cada peça contém seu próprio valor;
- Ao clicar no botão Serviços, o funcionario será redirecionado para a tela de serviços, onde poderá visualizar todos os serviços inicializados como os finzalizados;
- O funcionario poderá confirmar o serviço e finaliza-lo, recebendo a data de conclusão e de término;
- Caso queira gerenciar os serviços de outro cliente, basta clicar em logout no Header da página, o funcionário será direcionado para a tela de identificação, onde poderá começar o processo novamente;

## ATENÇÃO: Por conta da falta de um back-end, os dados são mocks, ou seja, essa aplicação é com fins demostrativos de um front-end!

### Para se identificar na tela de identificação use o cpf:
- 197.201.358.40

### CPF's exclusivos, para os seguintes clientes:

- __Patricia Magi__: 123.456.789-10;
- __Jonathan Cristian__: 987.654.321-12;
- __Genesis Pereira__: 111.222.333-44;
- __Wilson Salles__: 555.444.333-22;


<p align="right">(<a href="#readme-top">de volta para o topo</a>)</p>



### Construído com
* <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" alt="react" width="50" height="50"/>
* <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="java-script" width="50" height="50"/>
* <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain-wordmark.svg" alt="css" width="50" height="50"/>
* <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain-wordmark.svg" alt="html" width="50" height="50"/>
* <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-plain-wordmark.svg" alt="git" width="50" height="50"/>
<p align="right">(<a href="#readme-top">de volta para o topo</a>)</p>



<!-- COMEÇANDO -->
## Começando

Para fazer um **COPY** desse projeto em sua máquina localmente, siga às etapas abaixo.

### Instalação

1. Clone o repositório

  - Use o comando: 
   ```sh
   git clone git@github.com:Lucdomingues/UltraCar.git
   ```
  2. Instale as dependências
   ```sh
   npm install
   ```
  3. Crie uma branch a partir da branch `master`
  - Verifique que você está na branch `master`
    ```sh
    git branch
    ```
  - Se não estiver, mude para a branch `master`
    ```sh
    git checkout master
    ```
  - Agora crie uma branch à qual você vai submeter os `commits` do seu projeto
    ```sh
    git checkout -b nome-da-branch
    ```
  4. Adicione as mudanças ao _stage_ do Git e faça um `commit`

  - Verifique que as mudanças ainda não estão no _stage_
    ```sh
    git status
    ```
  - Adicione o novo arquivo ao _stage_ do Git
    ```sh
    git add .
    git status
    ```
  - Faça o `commit` inicial
    ```sh
    git commit -m '[feat]new-feature'
    git status
    ```
<p align="right">(<a href="#readme-top">de volta para o topo</a>)</p>

<!-- CONTRIBUINDO -->
## Contribuindo

As contribuições são o que torna a comunidade de código aberto um lugar incrível para aprender, inspirar e criar. Quaisquer contribuições que você fizer são **muito apreciadas**.

Se você tiver uma sugestão para melhorar isso, bifurque o repositório e crie uma solicitação pull. Você também pode simplesmente abrir um problema com a tag "melhoria".
Não se esqueça de dar uma estrela ao projeto! Obrigado novamente!

1. Faça um Fork do projeto
2. Crie sua branch (`git checkout -b feature/newFeature`)
3. Commit suas mudanças (`git commit -m '[feat]Add some newFeature'`)
4. Dê um push em sua branch (`git push origin feature/newFeature`)
5. Abra um Pull Request

<p align="right">(<a href="#readme-top">de volta para o topo</a>)</p>

<!-- CONTATO -->
## Contato

EMAIL - lojalucc@outlook.com

LINKEDIN - [https://www.linkedin.com/in/lucas-domingues-developer/](https://www.linkedin.com/in/lucas-domingues-developer/)

<p align="right">(<a href="#readme-top">de volta para o topo</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/Lucdomingues/UltraCar.svg?style=for-the-badge
[contributors-url]: https://github.com/Lucdomingues/UltraCar/graphs/contributors
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/lucas-domingues-developer/
[product-screenshot]: images/screenshot.png
