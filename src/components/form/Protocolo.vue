<template>
  <v-container>
    <v-stepper v-model="e6" vertical>
      <v-stepper-header class="mt-0">
        <v-flex class="mt-5"> FORMULÁRIO DE PROCESSO </v-flex>
      </v-stepper-header>
      <v-stepper-step :complete="e6 > 1" step="1" @click="e6 = 1">
        <v-flex>
          <v-icon color="green"> mdi-file-document </v-icon> Dados Protocolo
        </v-flex>
      </v-stepper-step>

      <v-stepper-content step="1">
        <FormProtocolo />
        <v-flex class="d-flex justify-end mb-6">
          <v-btn rounded color="blue" @click="e6 = 2">
            Próximo
            <v-icon right dark> mdi-arrow-right</v-icon>
          </v-btn>
        </v-flex>
      </v-stepper-content>

      <v-stepper-step :complete="e6 > 2" step="2" @click="e6 = 2">
        <v-flex> <v-icon color="green"> mdi-account </v-icon> Dados Requerente </v-flex>
      </v-stepper-step>

      <v-stepper-content step="2">
        <FormRequerente />
        <v-flex class="d-flex justify-end mb-6">
          <v-btn rounded color="red" @click="e6 = 1">
            <v-icon left> mdi-arrow-left</v-icon>
            Anterior
          </v-btn>
          <v-btn rounded color="blue" @click="e6 = 3">
            Próximo
            <v-icon right dark> mdi-arrow-right</v-icon>
          </v-btn>
        </v-flex>
      </v-stepper-content>

      <v-stepper-step :complete="e6 > 3" step="3" @click="e6 = 3">
        <v-flex> <v-icon color="green">mdi-folder </v-icon> Documentos </v-flex>
      </v-stepper-step>

      <v-stepper-content step="3">
        <FormDocumento />
        <v-flex class="d-flex justify-end mb-6">
          <v-btn rounded color="red" @click="e6 = 2">
            <v-icon left> mdi-arrow-left</v-icon>
            Anterior
          </v-btn>
          <v-btn rounded color="blue" @click="e6 = 4">
            Próximo
            <v-icon right dark> mdi-arrow-right</v-icon>
          </v-btn>
        </v-flex>
      </v-stepper-content>

      <v-stepper-step step="4" @click="e6 = 4">
        <v-flex> <v-icon color="green"> mdi-eye </v-icon> Observação </v-flex>
      </v-stepper-step>
      <v-stepper-content step="4">
        <FormObservacao />
        <v-flex class="d-flex justify-end mb-6">
          <v-btn rounded color="red" @click="e6 = 3">
            <v-icon left> mdi-arrow-left</v-icon>
            Anterior
          </v-btn>
        </v-flex>
      </v-stepper-content>
    </v-stepper>
    <v-flex class="d-flex justify-end mt-6">
      <v-btn rounded color="success" @click="e6 = 1"> Protocolar </v-btn>
    </v-flex>
  </v-container>
</template>

<script>
import FormRequerente from "./requerente/FormRequerente.vue";
import FormProtocolo from "./protocolo/FormProtocolo";
import FormDocumento from "./documento/FormDocumento";
import FormObservacao from "./observacao/FormObservacao";

export default {
  components: { FormRequerente, FormProtocolo, FormDocumento, FormObservacao },
  data() {
    return {
      e6: 1,
      nome: "",
      password: "",
      url: [],
      arquivos: [],
    };
  },
};
</script>
