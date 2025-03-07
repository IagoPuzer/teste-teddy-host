# Host - Arquitetura de Microfrontend

Este repositório serve como **host** para uma arquitetura de **microfrontend**, fornecendo os **layouts das aplicações** e a **página inicial de login**.

## 🛠️ Tecnologias Utilizadas

- **Angular** para o host e integração dos microfrontends
- **Module Federation** para a composição dinâmica dos microfrontends
- **Webpack 5** para gerenciamento dos módulos remotos
- **Docker** para facilitar a execução e implantação da aplicação

## 🚀 Executando o Servidor de Desenvolvimento

Para iniciar o servidor de desenvolvimento local, execute:

```bash
ng serve
```

Uma vez iniciado, acesse a aplicação pelo navegador:

🔗 [http://localhost:4200/](http://localhost:4200/)

A aplicação **será recarregada automaticamente** sempre que houver modificações nos arquivos de origem.

## 🐳 Executando com Docker

A aplicação está **dockerizada**, permitindo fácil execução sem necessidade de configurar dependências localmente.

Para rodar a aplicação com Docker, execute:

```bash
docker compose up --build
```

Isso criará e iniciará o container com a aplicação rodando.

Caso queira parar os containers, utilize:

```bash
docker compose down
```

## 🔧 Configuração para Desenvolvimento Local

Antes de rodar a aplicação localmente, é necessário modificar a rota no arquivo `federation.manifest.json`, localizado na pasta `public`.

Edite o arquivo para que contenha a seguinte configuração:

```json
{
  "remoteEntry": "http://localhost:4202/remoteEntry.json"
}
```

## 🏗️ Executando o Microfrontend

Para que o host funcione corretamente em ambiente local, é necessário rodar também o projeto do **microfrontend**, disponível no seguinte repositório:

🔗 [https://github.com/IagoPuzer/teste-teddy-microfrontend-clients](https://github.com/IagoPuzer/teste-teddy-microfrontend-clients)

Certifique-se de que o microfrontend está em execução antes de iniciar o host.

## 📝 Notas Importantes

- O host **não contém lógica de negócio**, apenas layouts e a estrutura base para os microfrontends.
- Certifique-se de que as configurações de rede permitem comunicação entre o host e os microfrontends.
- Se houver problemas de carregamento do microfrontend, verifique se o caminho de `remoteEntry` está correto e se o servidor do microfrontend está rodando.
- Ao rodar a aplicação com **Docker**, garanta que as portas configuradas nos containers não estejam em uso por outros serviços.
