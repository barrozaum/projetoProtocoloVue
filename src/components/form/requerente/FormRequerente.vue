<template>
  <v-form ref="form" v-model="valid" lazy-validation>
    <v-row>
      <v-col cols="12" sm="6" md="6">
        <v-text-field
          v-model="name"
          :counter="10"
          :rules="nameRules"
          label="Name"
          filled
          required
        >
          <v-icon slot="append" color="green"> mdi-account-search </v-icon>
          <v-icon slot="prepend" color="green"> mdi-account-plus </v-icon>
        </v-text-field>
      </v-col>
      <v-col cols="12" sm="6" md="6">
        <v-text-field
          v-model="name"
          :counter="10"
          :rules="nameRules"
          label="CEP"
          filled
          required
        >
          <v-icon slot="prepend" color="green">mdi-home</v-icon>
        </v-text-field>
      </v-col>
      <v-col cols="12" sm="6" md="6">
        <v-text-field
          v-model="name"
          :counter="10"
          :rules="nameRules"
          label="Celular"
          filled
          required
        >
          <v-icon slot="prepend" color="green">mdi-cellphone-basic</v-icon>
        </v-text-field>
      </v-col>
      <v-col cols="12" sm="6" md="6">
        <v-text-field
          v-model="name"
          :counter="10"
          :rules="nameRules"
          label="Telefone"
          filled
          required
        >
          <v-icon slot="prepend" color="green">mdi-phone-classic</v-icon>
        </v-text-field>
      </v-col>
      <v-col cols="12" sm="6" md="8">
        <v-text-field
          v-model="name"
          :counter="10"
          :rules="nameRules"
          label="LOGRADOURO"
          filled
          required
        >
        </v-text-field>
      </v-col>
      <v-col cols="12" sm="6" md="4">
        <v-text-field
          v-model="name"
          :counter="10"
          :rules="nameRules"
          label="Bairro  "
          filled
          required
        >
        </v-text-field>
      </v-col>
      <v-col cols="12" sm="6" md="4">
        <v-text-field
          v-model="name"
          :counter="10"
          :rules="nameRules"
          label="Cidade  "
          filled
          required
        >
        </v-text-field>
      </v-col>
      <v-col cols="12" sm="6" md="4">
        <v-text-field
          v-model="name"
          :counter="10"
          :rules="nameRules"
          label="Uf "
          filled
          required
        >
        </v-text-field>
      </v-col>
      <v-col cols="12" sm="6" md="4">
        <v-text-field
          v-model="name"
          :counter="10"
          :rules="nameRules"
          label="Número End :"
          filled
          required
        >
        </v-text-field>
      </v-col>
      <v-col cols="12" sm="6" md="12">
        <v-text-field
          v-model="name"
          :counter="10"
          :rules="nameRules"
          label="Complemento "
          filled
          required
        >
        </v-text-field>
      </v-col>
    </v-row>
  </v-form>
</template>
