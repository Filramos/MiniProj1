<template>
  <div>
    <SpaHeader />
    <div class="conteudoSpa">
      <router-view> </router-view>
    </div>
    <SpaFooter />
  </div>
</template>

<script>
import SpaHeader from "./components/header/SpaHeader.vue";

import SpaFooter from "./components/footer/SpaFooter.vue";

export default {
  name: "App",
  components: {
    SpaHeader,
    SpaFooter,
  },
};
</script>

<style>
@import "bootstrap/dist/css/bootstrap.css";

* {
  font-family: Arial, Helvetica, sans-serif;
}

h1 {
  margin: 20px 10px 30px 10px;
  font-weight: bolder;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  font-size: 32px;
  line-height: 33px;
}

h1:hover {
  font-size: 33px;
}

#app {
  max-width: 1280px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: auto;
  margin-top: 0px;
}

#quemsoueu,
#hobbies,
#oquefaco {
  min-height: 100vh;
  padding: 20px;
  margin-top: 10px;
}

#quemsoueu {
  background-color: #a7a7a7ff;
  color: #ffffff;
}

#oquefaco {
  background-color: #a7a7a7ff;
  color: #ffffff;
}

#hobbies {
  background-color: #a7a7a7ff;
  color: #000000;
}

.text-left {
  text-align: left;
}

.sectionImg {
  width: 100%;
  height: auto;
  border-radius: 50%;
  aspect-ratio: 1/1;
  margin-bottom: 10px;
  padding: 10px;
}

.navbar-brand img,
.socialLogos img {
  transition: transform 0.7s ease-in-out;
}
.navbar-brand img:hover,
.socialLogos img:hover {
  transform: rotate(360deg);
}

@media (max-width: 992px) {
  h1 {
    margin: 0 0 10px 0;
  }

  .sectionImg {
    width: 33%;
  }
}
</style>
