# TesteVagaFrontEndJr

Este projeto foi desenvolvido como parte de um teste para uma vaga de desenvolvedor front-end. O objetivo principal é demonstrar habilidades em 
desenvolvimento de interfaces utilizando tecnologias modernas.

## Tecnologias Utilizadas

- **React**: Biblioteca JavaScript para construção de interfaces de usuário.
- **TypeScript**: Superset do JavaScript que adiciona tipagem estática.
- **SASS/SCSS**: Pré-processador CSS que permite o uso de variáveis, aninhamento e outras funcionalidades avançadas.
- **React Slick**: Componente de carrossel utilizado para navegação entre produtos.
- **Html / JSX / Babel**: Estruturação junto ao React.

## Como Rodar o Projeto Localmente

Siga os passos abaixo para rodar o projeto em sua máquina local:

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/devPabloEdu/TesteVagaFrontEndJr.git
2. **Navegue até o diretório do projeto::**
   cd TesteVagaFrontEndJr
   
3. **Instale as dependencias::**
   yarn install ou npm install
   
4. **Execute o projeto::**
   yarn start ou npm start

Estrutura do Projeto
- src/: Contém todo o código fonte do projeto.
- public/: Arquivos públicos, como o index.html.
- package.json: Arquivo de configuração do npm/yarn.
- README.md: Este arquivo.

Funcionalidades
-Carrossel de Produtos: Exibe 4 produtos por vez, permitindo a navegação horizontal.
-Modal de Detalhes do Produto: Ao clicar em um produto, um modal exibe suas principais características e imagem.

Componentes do Projeto:

- App.tsx:O ponto de entrada principal do aplicativo. Renderiza todos os componentes principais, como Header, Banner, MainTopNavegacao, ProductList, Aside, e Footer.

- Header:Contém a parte superior do site, incluindo informações sobre segurança, frete grátis e parcelamento.
Inclui uma barra de pesquisa com um ícone de lupa, e ícones adicionais para vetores, coração, perfil de usuário e carrinho de compras.
Possui uma barra de navegação com links para categorias populares do site.

- Banner: é um componente visual que exibe promoções ou informações importantes no topo da página.

- MainTopNavegacao: Exibe as principais categorias do site, com ícones e nomes para cada categoria (como Tecnologia, Supermercado, Bebidas, etc.).
Também possui uma seção para "Produtos Relacionados", com links para subcategorias como celulares, acessórios, tablets, etc.

- ProductList: Renderiza uma lista de produtos com informações como imagem, nome, descrição, preço, e botão de compra.
Inclui um carrossel para navegação entre os produtos, exibindo 4 produtos por vez, com botões para avançar e retroceder.
Implementa um modal que exibe mais detalhes sobre um produto específico quando o usuário clica nele.

- Aside: Contém uma seção destacando parceiros do site e um carrossel de logos de marcas.
Possui também uma seção de "Produtos relacionados", provavelmente usada para destacar itens sugeridos para o usuário.

- Footer:O rodapé do site, dividido em várias seções:
Sobre Nós: Links para páginas institucionais e redes sociais (Facebook, Instagram, YouTube).
Informações Úteis: Links para páginas como "Fale Conosco", "Dúvidas", "Prazos de Entrega", entre outras.
Formas de Pagamento: Exibe logos de diferentes métodos de pagamento aceitos no site.
Cadastro: Uma seção para o usuário se cadastrar e receber novidades e promoções.
Copyright: Informação de direitos autorais e imagem do logo da empresa.
