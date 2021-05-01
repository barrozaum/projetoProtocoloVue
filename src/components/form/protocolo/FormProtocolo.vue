<template>
  <v-form ref="form" v-model="valid" lazy-validation>
    <v-flex>
      <v-row>
        <v-col cols="12" sm="6" md="4">
          <v-switch v-model="switch1" :label="'Gerar Numero automático ?'"></v-switch>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" sm="6" md="8">
          <v-autocomplete
            v-model="values"
            :items="items"
            label="Tipo Processo"
            filled
            rounded
            required
          >
          </v-autocomplete>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" sm="6" md="6">
          <v-text-field
            v-model="name"
            :counter="10"
            :rules="nameRules"
            label="Numero"
            filled
            rounded
            :disabled="switch1"
            required
          />
        </v-col>
        <v-col cols="12" sm="6" md="6">
          <v-text-field
            v-model="name"
            :counter="10"
            :rules="nameRules"
            label="Ano"
            filled
            :disabled="switch1"
            rounded
            required
          />
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" sm="6" md="12">
          <v-text-field
            v-model="name"
            :counter="10"
            :rules="nameRules"
            label="Assunto "
            filled
            required
          >
            <v-icon slot="append" color="green"> mdi-account-search </v-icon>
            <v-icon slot="prepend" color="green"> mdi-account-plus </v-icon>
          </v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" sm="6" md="12">
          <v-text-field
            v-model="name"
            :counter="10"
            :rules="nameRules"
            label="Origem "
            filled
            required
          >
            <v-icon slot="append" color="green"> mdi-account-search </v-icon>
            <v-icon slot="prepend" color="green"> mdi-account-plus </v-icon>
          </v-text-field>
        </v-col>
      </v-row>
    </v-flex>
  </v-form>
</template>
<script>
export default {
  /*
      Variables used by the drag and drop component
    */
  data() {
    return {
      switch1: true,
      items: ["PROCESSO EXTERNO", "PROCESSO INTERNO"],
    };
  },
};
</script>
