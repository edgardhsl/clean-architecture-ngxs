-   data (Camada de infraestrutura)

Responsável por fazer comunicação com api e bibliotecas;

    -   client-provider
    -   utils
        -   http-client
        -   quark-client

-   domain (Camada mais interna)

    -   client
        -   rest-client-intarface
        -   rest-client-impl
        -   rest-client-util

## Observações

- O httpClient e o quark ficam na camada `data` porque utilizam ferramentas externas e na camada domínio só pode conter
regras de negócio sem nenhuma comunicação com nada externo;
- O IFilter é uma implementação de uma biblioteca externa, então como vou implementar ela na camada de domínio?
- Tipar as variáveis de filtro no request do domain, mas como podemos tipar isso?