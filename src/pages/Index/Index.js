export default {
  name: 'index',
  data () {
    return {
      text: '',
      item: 100,
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
      dados: []
    }
  },
  mounted () {
    this.dados.push([])
    this.dados.push([])
    this.dados[0].push({ oi: 'ola1' })
    this.dados[0].push({ oi: 'ola2' })
    this.dados[1].push({ cnae: '22838379', atividade: 'Comércio varejista de mercadorias em geral, com predominância de produtos.' })
    this.dados[1].push({ cnae: '23823723', atividade: 'Comércio varejista de livros' })
    this.dados[1].push({ cnae: '323i2832', atividade: 'Comércio varejista de CDS' })
    this.dados[1].push({ cnae: '43283283', atividade: 'Comércio varejista de Eletronicos' })
    this.dados[1].push({ cnae: '32837272', atividade: 'Comércio varejista de Cortinas' })
    console.log(this.dados)
  },
  methods: {
    add () {
      // this.dados[1].push({ cnae: 'ola' + this.item, atividade: this.item + ' Atividades nome' })
      this.item++
      this.dados[1][2] = { cnae: 'ola' + this.item, atividade: 'Comércio varejista de livros' }
    }
  }
}
