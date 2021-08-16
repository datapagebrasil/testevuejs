## Cenário fictício

O Cliente precisa consultar um cpnj com CEP de forma rápida.

O cliente precisa inserir novas atividade secundárias para o cnpj consultado.

## O que deve ser feito?

Fazer o clone do projeto.

Criar uma rota da seguinte forma:

http://localhost:8080/:cnpj/:cep

exemplo: http://localhost:8080/00776574000660/74010010

Deverá preencher o formulário abaixo com a seguintes regras:


1. CNPJ , se o cnpj não existir no retorno da api, refazer a consulta e preencher com cnpj: 16616277000183
2. No retorno do CNPJ, salvar no Vuex (store) e apresentar o nome da empresa no topo utilizando
<a href="https://vuex.vuejs.org/guide/getters.html#property-style-access" target="_blank">getters</a> em um <a href="https://vuex.vuejs.org/guide/getters.html#property-style-access" targe="_blank">computed</a>
3. No retorno cnpj, temos 2 atributos: atividades_secundarias e qsa. Vamos popular somente o array
(dados: [] , sendo dados[0] para atividades_secundarias e dados[1] para qsa)
4. CEP, pegar o CEP do CNPJ anterior, se nao nao existir, usar o seguinte CEP: 74917-130
5. O CEP, posso alterar e fazer uma nova requisição ao completar <a href="https://vuejs.org/v2/guide/computed.html#Computed-vs-Watched-Property">7 dígitos numéricos</a>
6. Adicionar máscara de Telefone, CNPJ e CEP
7. Iremos adicionar mais 2 sócios preenchendo os inputs (nome do sócio e cargo) <a href="https://vuex.vuejs.org/guide/getters.html#property-style-access">dentro do array(Table)</a>.




## APIs:

-GET: https://receitaws.com.br/v1/cnpj/00776574000660

-GET: https://cep.parcelosuaconta.com.br/api/v1/logradouros/cep/74010010

-POST: https://api.calamaro.com.br/api/v1/auth/login

login: marcelo123@datarow.com.br

senha: 123123

Irá retornar a propriedade token.

Esse token é o bearer token para usar na próxima requisição para salvar as informações:


## Biblioteca
-https://quasar.dev/
-https://br.vuejs.org/v2/guide/reactivity.html
-https://vuex.vuejs.org/guide/getters.html#property-style-access
