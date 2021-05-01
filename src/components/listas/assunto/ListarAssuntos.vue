<template>
  <v-card>
    <v-card-title>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Pesquisar"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
    <v-data-table
      :headers="headers"
      :items="listarAssuntosCadastrados"
      sort-by="codigo"
      :search="search"
      class="elevation-1"
    >
      <template v-slot:top> </template>
      <template v-slot:item.editar="{ item }">
        <v-icon class="mr-2" @click="editItem(item)"> mdi-pencil </v-icon>
      </template>
    </v-data-table>
  </v-card>
</template>

<script>
export default {
  props: {
    listarAssuntosCadastrados: {
      type: Array,
      required: false,
    },
  },
  data: () => ({
    dialog: false,
    search: "",
    dialogDelete: false,
    headers: [
      {
        text: "Código",
        align: "start",
        sortable: true,
        value: "codigo",
      },
      { text: "Descricao", value: "descricao" },
      { text: "Editar", value: "editar", sortable: false },
    ],
    desserts: [],
  }),
  methods: {
    editItem(item) {
      this.$emit("assuntoEscolhido", item);
    },
  },
};
</script>
