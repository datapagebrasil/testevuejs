import axios from 'axios'
import { openURL } from 'quasar'
export default {
  name: 'PublicidadeMixin',
  data () {
    return {
      mixin: 'PublicidadeMixin'
    }
  },
  methods: {
    publicidadeAtiva (data = []) {
      if (process.env.CLIENT) {
        if (data.length > 0) {
          data.map((dado) => {
            const dados = {}
            dados.id_regiao = dado.cidade
            dados.id_canal = 2
            dados.id_categoria = dado.categoria === undefined ? -1 : dado.categoria
            dados.id_campanha = dado.campanha
            axios.post(process.env.API.host + 'ads/publicidade/atualizar_acessos', dados)
          })
        }
      }
    },
    clickPublicidade (campanha, link = '') {
      const dados = {}
      dados.id_campanha = campanha
      dados.id_canal = 1
      dados.id_categoria = 1
      dados.id_regiao = 1

      axios.post(process.env.API.host + 'ads/publicidade/atualizar_cliques', dados).then(() => {
        if (link !== '') {
          openURL(link)
        }
      })
    }
  }
}
