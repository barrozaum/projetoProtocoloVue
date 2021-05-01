<template>
  <v-flex>
    <v-app>
      <v-main>
        <v-container fluid fill-height>
          <v-layout align-center justify-center>
            <v-flex xs12 sm8 md4>
              <img v-for="item in url" :key="item" :src="item" />
              <v-card class="elevation-12">
                <v-toolbar dark color="primary">
                  <v-toolbar-title>Login form</v-toolbar-title>
                </v-toolbar>
                <v-card-text>
                  <v-avatar color="indigo">
                    <v-icon dark> mdi-account-circle </v-icon>
                  </v-avatar>
                  <v-form>
                    <v-text-field
                      v-model="nome"
                      prepend-icon="mdi-account"
                      name="login"
                      label="Login"
                      type="text"
                    ></v-text-field>
                    <v-text-field
                      v-model="password"
                      id="password"
                      prepend-icon="mdi-lock"
                      name="password"
                      label="Password"
                      type="password"
                    ></v-text-field>
                    <v-file-input
                      v-model="arquivos"
                      chips
                      multiple
                      @change="preview"
                      label="Enviar Arquivos"
                    ></v-file-input>
                  </v-form>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="primary" @click="efetuarLogin()">Login</v-btn>
                </v-card-actions>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </v-main>
    </v-app>
  </v-flex>
</template>

<script>
export default {
  data() {
    return {
      nome: "",
      password: "",
      url: [],
      arquivos: [],
    };
  },
  methods: {
    preview() {
      this.url = [];
      for (var i = 0; i < this.arquivos.length; i++) {
        this.url[i] = URL.createObjectURL(this.arquivos[i]);
      }
    },

    efetuarLogin() {
      console.log(this.arquivos);

      var form = new FormData();
      for (var i = 0; i < this.arquivos.length; i++) {
        form.append("uploadingFiles", this.arquivos[i], this.arquivos[i].name);
      }
      form.append("usuario", this.nome);
      form.append("password", this.password);
      console.log(form);

      const config = {
        headers: {
          "Content-Type": false,
          mimeType: "multipart/form-data",
        },
      };
      this.$http
        .post("/Login/fotos", form, config)
        .then((res) => console.log(res))
        .catch((error) => {
          console.log(JSON.stringify(error));
        });

      /*
      this.$http
        .post("/Login", {
          usuario: this.nome,
          password: this.password,
          arquivo: this.arquivos,


          
        })
        .then((res) => console.log(res));

        */
    },
  },
};
</script>

<style></style>
