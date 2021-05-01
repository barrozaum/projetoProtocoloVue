<template>
  <v-dialog @click:outside="closeDialog" :value="dialog" max-width="450px">
    <v-card
      @drop.prevent="onDrop($event)"
      @dragover.prevent="dragover = true"
      @dragenter.prevent="dragover = true"
      @dragleave.prevent="dragover = false"
      :class="{ 'grey lighten-2': dragover }"
    >
      <v-card-text>
        <v-row class="d-flex flex-column" dense align="center" justify="center">
          <v-icon :class="[dragover ? 'mt-2, mb-6' : 'mt-5']" size="60">
            mdi-cloud-upload
          </v-icon>
          <p>Drop your file(s) here, or click to select them.</p>
        </v-row>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>

        <v-btn @click="closeDialog" icon>
          <v-icon id="close-button">mdi-close</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon id="upload-button">mdi-upload</v-icon>
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "Upload",
  props: {
    dialog: {
      type: Boolean,
      required: true,
    },
    multiple: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      dragover: false,
      uploadedFiles: [],
    };
  },
  methods: {
    closeDialog() {
      this.$emit("update:dialog", false);
    },
    onDrop(e) {
      this.dragover = false;
      if (!this.multiple && e.dataTransfer.files.length > 1) {
        this.$store.dispatch("addNotification", {
          message: "Only one file can be uploaded at a time..",
          colour: "error",
        });
      } else e.dataTransfer.files.forEach((element) => this.uploadedFiles.push(element));
    },
  },
};
</script>

<style scoped></style>
