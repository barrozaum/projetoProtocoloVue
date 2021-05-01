<template>
  <v-container>
    <v-stepper>
      <v-stepper-header class="mt-0">
        <v-flex class="mt-5"> FORMULÁRIO DE ASSUNTO </v-flex>
      </v-stepper-header>
      <v-stepper-step complete editable step="1">
        <v-flex v-if="!edicao"> Cadastro Assunto</v-flex>
        <v-flex v-else> Editar Assunto</v-flex>
      </v-stepper-step>
      <v-stepper-content step="1">
        <FormAssunto :assunto="assunto" />
        <v-flex class="d-flex justify-end mb-6">
          <v-btn rounded color="green" v-if="!edicao" @click="addAssunto()">
            Cadastrar
          </v-btn>
          <v-btn rounded color="green" v-if="edicao" @click="addAssunto()"> Novo </v-btn>
          <v-btn rounded color="green" v-if="edicao" @click="editAssunto()">
            Editar
          </v-btn>
          <v-btn rounded color="green" v-if="edicao" @click="delAssunto()">
            Excluir
          </v-btn>
        </v-flex>
        <v-divider></v-divider>
      </v-stepper-content>
      <v-stepper-step step="1" complete>
        <v-flex> Listar Assuntos </v-flex>
      </v-stepper-step>

      <v-stepper-content step="1">
        <ListarAssunto
          :listarAssuntosCadastrados="listarAssuntosCadastrados"
          @assuntoEscolhido="assuntoEscolhido"
        />
        <v-divider></v-divider>
      </v-stepper-content>
    </v-stepper>
  </v-container>
</template>

<script>
import FormAssunto from "./assunto/FormAssunto";
import ListarAssunto from "../listas/assunto/ListarAssuntos";
export default {
  components: { FormAssunto, ListarAssunto },
  data() {
    return {
      assuntoEmEdicao: {},
      assunto: {
        descricao: "",
        codigo: "",
        escolha: false,
      },
      edicao: false,
      listarAssuntosCadastrados: [
        {
          codigo: 8,
          descricao: "assunto novo",
        },
        {
          codigo: 1,
          descricao: "a novo",
        },
      ],
    };
  },
  methods: {
    limparAssunto() {
      this.assuntoEmEdicao = {};
      this.assunto = {
        descricao: "",
        codigo: "",
        escolha: false,
      };
    },
    assuntoEscolhido(assunto) {
      this.edicao = true;
      var valoresAssuntoEscolhidoEdicao = {
        codigo: assunto.codigo,
        descricao: assunto.descricao,
      };
      var valoresAssuntoSelecionado = {
        codigo: assunto.codigo,
        descricao: assunto.descricao,
      };
      this.assuntoEmEdicao = valoresAssuntoEscolhidoEdicao;
      this.assunto = valoresAssuntoSelecionado;
    },
    addAssunto() {
      this.edicao = false;
      this.listarAssuntosCadastrados.push(this.assunto);
      this.limparAssunto();
    },
    delAssunto() {
      this.limpandoOnjetoDoArray();
      this.limparAssunto();
    },
    editAssunto() {
      this.limpandoOnjetoDoArray();
      this.addAssunto();
    },

    limpandoOnjetoDoArray() {
      var posicao = -1;
      for (var prop in this.listarAssuntosCadastrados) {
        if (
          this.listarAssuntosCadastrados[prop].codigo === this.assuntoEmEdicao.codigo &&
          this.listarAssuntosCadastrados[prop].descricao ===
            this.assuntoEmEdicao.descricao
        ) {
          posicao = prop;
          break;
        }
      }
      if (posicao > -1) {
        this.listarAssuntosCadastrados.splice(posicao, 1);
      }
    },
  },
};
</script>
