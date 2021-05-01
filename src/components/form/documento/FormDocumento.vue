<template>
  <v-container>
    <!-- Button for displaying the upload component -->
    <v-btn @click="uploadDialog = true" icon>
      <v-icon size="30">mdi-plus</v-icon>
    </v-btn>

    <Upload :dialog.sync="uploadDialog" />
  </v-container>
</template>

<script>
import Upload from "@/components/upload/UploadFile.vue";
export default {
  name: "Home",

  components: { Upload },
  data() {
    return {
      uploadDialog: false,
    };
  },
};
</script>
