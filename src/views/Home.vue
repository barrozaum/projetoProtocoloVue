<template>
  <v-container class="grey lighten-5">
    <v-row class="mb-6" no-gutters>
      <v-col cols="6" sm="6" md="4">
        <v-card :loading="loading" class="mx-auto my-12" max-width="374">
          <template slot="progress">
            <v-progress-linear
              color="deep-purple"
              height="10"
              indeterminate
            ></v-progress-linear>
          </template>
          <v-card-title>Cadastrar Processo</v-card-title>

          <v-img
            height="250"
            src="https://fluxoconsultoria.poli.ufrj.br/wp-content/uploads/2020/09/gestao-de-processos.jpg"
          ></v-img>

          <v-card-text>
            <div></div>
          </v-card-text>

          <v-divider class="mx-4"></v-divider>
        </v-card>
      </v-col>
      <v-col cols="6" sm="6" md="4">
        <v-card :loading="loading" class="mx-auto my-12" max-width="374">
          <template slot="progress">
            <v-progress-linear
              color="deep-purple"
              height="10"
              indeterminate
            ></v-progress-linear>
          </template>
          <v-card-title>Tramitar Processo</v-card-title>

          <v-img
            height="250"
            src="https://www.itaituba.pa.gov.br/public/admin/globalarq/uploads/images/zc1_w372_h372__256e63421c1565b337e0fd69f9633ea7fef35b0eeb707a9308f88f8df3ef1081_r5w1p.jpg"
          ></v-img>

          <v-card-text>
            <div></div>
          </v-card-text>

          <v-divider class="mx-4"></v-divider>
        </v-card>
      </v-col>
      <v-col cols="6" sm="6" md="4">
        <v-card :loading="loading" class="mx-auto my-12" max-width="374">
          <template slot="progress">
            <v-progress-linear
              color="deep-purple"
              height="10"
              indeterminate
            ></v-progress-linear>
          </template>
          <v-card-title>REceber Pr</v-card-title>

          <v-img
            height="250"
            src="https://www.itaituba.pa.gov.br/public/admin/globalarq/uploads/images/zc1_w372_h372__256e63421c1565b337e0fd69f9633ea7fef35b0eeb707a9308f88f8df3ef1081_r5w1p.jpg"
          ></v-img>

          <v-card-text>
            <div></div>
          </v-card-text>

          <v-divider class="mx-4"></v-divider>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {};
</script>
