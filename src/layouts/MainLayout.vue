<template>
  <q-layout view="hHh Lpr lff" class="full-height">
    <q-header class="bg-white header-principal">
      <q-toolbar class="full-width">
        <div class="col-12">
          <div class="row q-col-gutter-md items-center">
            <div class="col-md-9 col-xs-4">
              <div class="flex q-gutter-x-md items-center">
                <img basic no-default-spinner contain rel="noreferrer" width="65%" height="100%" src="https://datapage.com.br/wp-content/themes/datapage/dist/images/logo_datapage3.png" alt="Logo Datapage" class="main-logo block" />
              </div>
            </div>
            <div class="col-md-3 col-xs-8 text-right">
              <div class="flex items-center justify-end q-gutter-x-md">
                <h6 class="text-grey-7 text-weight-medium text-subtitle2 gt-sm">
                    <i>Teste Vue.js</i>
                </h6>
                <q-btn type="a" target="_blank" href="https://quasar.dev/" no-caps color="amber-9" rounded outline>Quasar Framework</q-btn>
              </div>
            </div>
          </div>
        </div>
      </q-toolbar>
    </q-header>
    <!-- container -->
    <q-page-container class="pd-100 bg-grey-2">
      <div class="q-pa-md">
        <router-view />
      </div>
    </q-page-container>
    <!-- footer -->
    <div class="full-width text-center bg-grey-2 q-pb-md">
      <i>Datapage - Todos os direitos reservados. <a class="text-amber-8" href="https://datapage.com.br">datapage.com.br</a></i>
    </div>
  </q-layout>
</template>

<script src="./MainLayout.js"></script>
<style lang="sass">
</style>
