<template>
  <q-page>
    <div class="row q-col-gutter-md justify-center items-center q-mt-lg">
      <div class="col-md-6 col-xs-12">
        <div class="card-form q-pa-lg">
          <div class="row q-col-gutter-md"><div class="col-12 text-center q-mt-md">
            <h5 class="text-weight-bold">{{ nomeComp }}</h5>
            <p class="text-grey-7">{{ emailComp }}</p>
            <h6 class="text-weight-bold">Quantidade de colaboradore(s): {{ dados[2][0] }}</h6>
            <p class="text-grey-7 q-mt-md">
              <q-badge class="text-subtitle2" :color="situacaoComp == 'ativa' ? 'positive' : 'negative'" round>
                Situacao: {{ situacaoComp }}
              </q-badge>
            </p>
          </div>
            <div class="col-12">
              <div class="row">
                <div class="col-xs-9">
                  <h5 class="text-h6 q-mb-sm">Quantidade de Colaboradores</h5>
                </div>
                <div class="col-xs-3">
                  <div class="flex justify-between items-center">
                    <button class="btn-acao-card left">
                      <q-icon name="remove"></q-icon>
                    </button>
                    <div class="valor"> {{ dados[2][0] }}</div>
                    <button class="btn-acao-card right">
                      <q-icon name="add"></q-icon>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-12">
              <div class="row q-col-gutter-md justify-center">
                <!-- Nome -->
                <div class="col-md-6 col-xs-12">
                  <q-input outlined v-model="text" label="Nome" />
                </div>
                <!-- CNPJ -->
                <div class="col-md-6 col-xs-12">
                  <q-input outlined v-model="text" label="Cnpj" />
                </div>
                <!-- CEP -->
                <div class="col-md-6 col-xs-12">
                  <q-input outlined v-model="text" label="Cep" />
                </div>
                <!-- Telefone -->
                <div class="col-md-6 col-xs-12">
                  <q-input outlined v-model="text" label="Telefone" />
                </div>
                <!-- endereço -->
                <div class="col-12">
                  <hr class="q-mb-md">
                  <h5 class="text-h6 q-mb-sm">Endereço</h5>
                  <p class="q-mb-none text-grey-8">Rua: -</p>
                  <p class="q-mb-none text-grey-8">Bairro: -</p>
                </div>
                <!-- Sócios -->
                <div class="col-12">
                  <hr class="q-mb-md">
                  <h5 class="text-h6 q-mb-sm">Sócios</h5>
                </div>
                <div class="col-md-4 col-xs-12">
                  <q-input outlined v-model="text" label="Nome" />
                </div>
                <div class="col-md-4 col-xs-12">
                  <q-select
                    outlined
                    v-model="text"
                    :options="cargo"
                    label="Cargo" />
                </div>
                <div class="col-md-4 col-xs-12">
                  <q-btn color="primary" no-caps class="full-width full-height" unelevated rounded @click="add()">
                    <span class="text-white text-subtitle1">Adicionar1</span>
                  </q-btn>
                </div>
                <div class="col-12">
                   <q-table
                      hide-bottom
                      :data="[
                        {nome: 'Marcelo', cargo: 'Diretor'},
                        {nome: 'Tulio', cargo: 'Diretor'}
                      ]"
                      :columns="[
                        {name: 'nome', align: 'left', label: 'Nome', field: 'nome', sortable: true},
                        {name: 'cargo', align: 'left', label: 'Cargo', field: 'cargo', sortable: true}
                      ]"
                      row-key="name"
                    />
                </div>
                <!-- Atividades -->
                <div class="col-12">
                  <hr class="q-mb-md">
                  <h5 class="text-h6 q-mb-sm">Atividades</h5>
                </div>
                <div class="col-12">
                   <q-table
                     hide-bottom
                     :data="dados[1]"
                      :columns="[
                        {name: 'cnae', align: 'left', label: 'CNAE', field: 'cnae', sortable: true},
                        {name: 'atividade', align: 'left', label: 'Atividade', field: 'atividade', sortable: true}
                      ]"
                      row-key="name"
                    />
                </div>
                <!-- fim -->
                <div class="col-md-12 col-xs-12">
                  <q-btn color="amber-7" class="full-width" padding="12px 32px" no-caps unelevated rounded>
                    <span class="text-primary text-subtitle1">Salvar dados</span>
                  </q-btn>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script src="./Index.js"></script>

<style lang="sass">
</style>
