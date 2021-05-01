<template>
  <v-form ref="form" v-model="valid" lazy-validation>
    <v-flex>
      <v-row>
        <v-col cols="12" sm="6" md="8">
          <v-switch
            v-model="assunto.escolha"
            :label="'Gerar Numero automático ?'"
          ></v-switch>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" sm="3" md="3">
          <v-text-field
            v-model="assunto.codigo"
            label="Código"
            :disabled="assunto.escolha"
          />
        </v-col>
        <v-col cols="12" sm="9" md="9">
          <v-text-field v-model="assunto.descricao" label="Assunto" />
        </v-col>
      </v-row>
    </v-flex>
  </v-form>
</template>
<script>
export default {
  props: {
    assunto: {
      type: Object,
      required: false,
    },
  },
  data() {
    return {
      formAssunto: {
        codigo: "",
        assunto: "",
      },
    };
  },
  computed: {},
};
</script>
