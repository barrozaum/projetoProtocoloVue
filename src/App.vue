<template>
  <v-app>
    <v-row align="center" justify="center">
      <Header />
      <v-col class="text-center" cols="12">
        <v-main>
          <transition name="slide" mode="out-in">
            <router-view></router-view>
          </transition>
        </v-main>
      </v-col>
      <Footer />
    </v-row>
  </v-app>
</template>

<script>
import Header from "./views/Header";
import Footer from "./views/Footer";
export default {
  components: { Header, Footer },
};
</script>

<style>
@keyframes slide-in {
  from {
    transform: translateY(-30px);
    opacity: 0;
  }
  to {
    transform: translateY(0px);
    opacity: 1;
  }
}
@keyframes slide-out {
  from {
    transform: translateY(0px);
    opacity: 1;
  }
  to {
    transform: translateY(-30px);
    opacity: 0;
  }
}

.slide-enter-active {
  animation: slide-in 0.3s ease;
}
.slide-leave-active {
  animation: slide-out 0.3s ease;
}
</style>
