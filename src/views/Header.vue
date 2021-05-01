<template>
  <v-flex>
    <v-app-bar app dark>
      <div class="d-flex align-center" color="primary" dark>
        <v-btn flat to="/"> Sistema de processo <v-icon dark> mdi-file </v-icon></v-btn>
      </div>
      <!-- menu smartphone-->
      <v-toolbar-items class="d-flex d-sm-none"> xs |</v-toolbar-items>
      <v-toolbar-items class="d-none d-sm-flex d-md-none"> | sm |</v-toolbar-items>
      <v-toolbar-items class="d-none d-md-flex d-lg-none"> | md |</v-toolbar-items>
      <v-toolbar-items class="d-none d-lg-flex d-xl-none">
        <v-menu
          :rounded="rounded"
          open-on-hover
          offset-y
          transition="slide-x-transition"
          bottom
          right
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn flat v-bind="attrs" v-on="on"> Processo </v-btn>
          </template>
          <v-list dense>
            <v-list-item
              v-for="(item, index) in menuProcesso"
              :key="index"
              router
              :to="item.link"
            >
              <v-list-item-action>
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item-action>
            </v-list-item>
          </v-list>
        </v-menu>
        <v-menu
          :rounded="rounded"
          open-on-hover
          offset-y
          transition="slide-x-transition"
          bottom
          right
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn flat v-bind="attrs" v-on="on"> Consulta </v-btn>
          </template>
          <v-list dense>
            <v-list-item
              v-for="(item, index) in menuCadastro"
              :key="index"
              router
              :to="item.link"
            >
              <v-list-item-action>
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item-action>
            </v-list-item>
          </v-list>
        </v-menu>
        <v-menu
          :rounded="rounded"
          open-on-hover
          offset-y
          transition="slide-x-transition"
          bottom
          right
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn flat v-bind="attrs" v-on="on"> Cadastro </v-btn>
          </template>
          <v-list dense>
            <v-list-item
              v-for="(item, index) in services"
              :key="index"
              router
              :to="item.link"
            >
              <v-list-item-action>
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item-action>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-toolbar-items>
      <v-spacer></v-spacer>

      <v-toolbar-items>
        <v-btn flat to="/login">
          <v-row justify="space-around">
            <v-avatar color="indigo">
              <v-icon dark> mdi-account-circle </v-icon>
            </v-avatar>
          </v-row>
        </v-btn>
      </v-toolbar-items>
      <v-toolbar-items class="d-none d-xl-flex"> xl | </v-toolbar-items>

      <!-- menu smartphone-->
    </v-app-bar>
  </v-flex>
</template>
<script>
export default {
  data: () => ({
    menuProcesso: [
      {
        icon: "mdi-domain",
        title: "Protocolo",
        link: "/protocolo",
      },
    ],
    menuCadastro: [
      {
        icon: "mdi-domain",
        title: "Assunto",
        link: "/assunto",
      },
      {
        icon: "mdi-domain",
        title: "Origem",
        link: "/origem",
      },
      {
        icon: "mdi-domain",
        title: "Setores",
        link: "/setores",
      },
      {
        icon: "mdi-domain",
        title: "Tipo Processo",
        link: "/tipoProcesso",
      },
    ],
    services: [
      {
        icon: "mdi-domain",
        title: "Assunto",
        link: "/assunto",
      },
      {
        icon: "mdi-message-text",
        title: "Origem",
        link: "/origem",
      },
      {
        icon: "mdi-message-text",
        title: "Origem",
        link: "/origem",
      },
      {
        icon: "mdi-flag",
        title: "Integration Analysis",
      },
    ],
  }),
};
</script>
