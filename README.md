<p align="center">
  <img src="./src/assets/logo.svg" alt="Logo" width="300"/>
  <br>
</p>
<h3 align="center">
Seu equilíbrio financeiro começa aqui!
</h3>

<p align="center">
  <img src="https://img.shields.io/static/v1?label=go&message=finance&color=blueviolet&style=for-the-badge"/>
  <img src="https://img.shields.io/github/license/MrRioja/gofinances?color=blueviolet&logo=License&style=for-the-badge"/>
  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/MrRioja/gofinances?color=blueviolet&logo=TypeScript&logoColor=white&style=for-the-badge">
  <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/MrRioja/gofinances?color=blueviolet&style=for-the-badge">
</p>

<p align="center">
  <a href="#sobre">Sobre</a> •
  <a href="#gofinances">GoFinances</a> •
  <a href="#instalação">Instalação</a> •
  <a href="#tecnologias">Tecnologias</a> •
  <a href="#autor">Autor</a>  
</p>

## Sobre

Projeto desenvolvido durante o bootcamp Ignite da Rocketseat na trilha de React Native.

## GoFinances

O GoFinance é uma aplicação mobile feita com React Native e Typescript cujo objetivo é proporcionar à seus usuários um controle prático e centralizado sob suas finanças.

Ao acessar a aplicação, o usuário é direcionado para a tela de login aonde deve se autenticar com uma conta Google para acessar as funcionalidades do app:

<img src=".github/login.png" alt="Tela de login" width="350" />

Ao finalizar o login, o usuário será direcionado para a home da aplicação onde o usuário terá a sua disposição o botão de logoff, aos cards de entrada, saída e total das suas movimentações financeiras e mais abaixo uma lista com as transações realizadas pelo cliente, conforme podemos ver a seguir:

|               Entradas               |               Saídas                |              Total               |
| :----------------------------------: | :---------------------------------: | :------------------------------: |
| ![Entradas](.github/home-income.png) | ![Saídas](.github/home-outcome.png) | ![Total](.github/home-total.png) |

Para que uma transação gere impacto nos cards da home e apareça na listagem é necessário que o usuário realize o registro da mesma. Para isso,basta clicar na aba `Register` no menu inferior da tela, para que o formulário de cadastro seja exibido. É nele onde o usuário irá informar um titulo, valor, indicar se trata-se de uma entrada ou saída e categorizar a transação. Abaixo podemos ver a tela de cadastro das transações:

<img src=".github/register-form.png" alt="Cadastro de movimentação" width="350" />

Também no menu inferior, temos a aba `Resumo`, onde os gastos serão exibidos mensalmente através de um gráfico que categoriza as saídas e exibe em porcentagem quanto o usuário gasta por categoria:

<img src=".github/summary.png" alt="Resumo das movimentações" width="350" />

Por fim, agora que todas as funcionalidades do app foram apresentadas deixarei a seguir um demonstração do app em funcionamento onde navego por todas as funcionalidades da aplicação:

<img src=".github/demo.gif" alt="Demonstração" width="350" />

## Instalação

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com) e [Node.js](https://nodejs.org/en/). Além disso é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/).

### 📱 Rodando o App (Mobile)

```bash
# Clone este repositório
$ git clone git@github.com:MrRioja/gofinances.git

# Acesse a pasta do projeto no terminal/cmd
$ cd gofinances

# Instale as dependências
$ npm install
# Caso prefira usar o Yarn execute o comando abaixo
$ yarn

# Execute a aplicação
$ expo start

# Execute os testes
$ npm run test
# Caso prefira usar o Yarn execute o comando abaixo
$ yarn test

# Será aberto no terminal o menu do Expo onde poderá scanear o QR Code para executar o app diretamente no seu celular ou as opções de executar no emulador android ou iOS
```

## Tecnologias

[![My Skills](https://skillicons.dev/icons?i=react,jest,ts)](https://skillicons.dev)

## Autor

<div align="center">
<img src="https://images.weserv.nl/?url=avatars.githubusercontent.com/u/55336456?v=4&h=100&w=100&fit=cover&mask=circle&maxage=7d" />
<h1>Luiz Rioja</h1>
<strong>Backend Developer</strong>
<br/>
<br/>

<a href="https://linkedin.com/in/luizrioja" target="_blank">
<img alt="LinkedIn" src="https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white"/>
</a>

<a href="https://github.com/mrrioja" target="_blank">
<img alt="GitHub" src="https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white"/>
</a>

<a href="mailto:lulyrioja@gmail.com?subject=Fala%20Dev" target="_blank">
<img alt="Gmail" src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white" />
</a>

<a href="https://api.whatsapp.com/send?phone=5511933572652" target="_blank">
<img alt="WhatsApp" src="https://img.shields.io/badge/WhatsApp-25D366?style=for-the-badge&logo=whatsapp&logoColor=white"/>
</a>

<a href="https://join.skype.com/invite/tvBbOq03j5Uu" target="_blank">
<img alt="Skype" src="https://img.shields.io/badge/SKYPE-%2300AFF0.svg?style=for-the-badge&logo=Skype&logoColor=white"/>
</a>

<br/>
<br/>
</div>
