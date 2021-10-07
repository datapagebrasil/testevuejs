export default {
  name: 'index',
  data () {
    return {
      text: '',
      item: 100,
      dados: [[], [], [0]],
      cargo: [
        {
          label: 'Diretor',
          value: 'diretor'
        },
        {
          label: 'Administrador',
          value: 'administrador'
        },
        {
          label: 'Financeiro',
          value: 'financeiro'
        }
      ],
      nome: null,
      cnpj: null,
      telefone: '',
      cep: '',
      endereco: null
    }
  },
  mounted () {
  },
  methods: {}
}
