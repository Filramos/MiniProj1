<template>
  <div class="spa-footer">
    <div class="row m-auto mt-2 justify-content-center">
      <div class="col-2">
        <a class="socialLogos" target="_blank" href="https://facebook.com">
          <img
            id="facebookLogo"
            src="/img/social/facebook.png"
            alt="Logo Facebook"
        /></a>
      </div>
      <div class="col-2">
        <a class="socialLogos" target="_blank" href="https://twitter.com">
          <img id="xLogo" src="/img/social/twitter.png" alt="Logo X"
        /></a>
      </div>
      <div class="col-2">
        <a
          class="socialLogos"
          target="_blank"
          href="https://github.com/Filramos"
        >
          <img id="githubLogo" src="/img/social/github.png" alt="Logo Github"
        /></a>
      </div>
      <div class="col-2">
        <a class="socialLogos" target="_blank" href="https://www.youtube.com">
          <img
            id="youtubeLogo"
            src="/img/social/youtube.png"
            alt="Logo Youtube"
        /></a>
      </div>
      <div class="col-2">
        <a
          class="socialLogos"
          target="_blank"
          href="https://www.linkedin.com/in/algoriginal/"
        >
          <img
            id="linkedinLogo"
            src="/img/social/linkedin.png"
            alt="Logo Linkedin"
        /></a>
      </div>
      <div class="col-12">
        <p>Filipe Ramos, 2025 © Todos os Direitos Reservados.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FooterSection",
};
</script>

<style scoped>
/* Estilos com o fundo escuro (para combinar com o header) */

.spa-footer {
  min-height: 60px;
  align-content: center;
  display: grid;
  /* Fundo escuro a combinar com o Header */
  background-color: #2c3e50;
  /* Texto claro para contrastar */
  color: #ecf0f1;
  padding: 20px 0 10px 0;
}

.spa-footer p {
  margin-top: 15px;
  margin-bottom: 10px;
  font-size: 12px;
  color: #ecf0f1;
  opacity: 0.7;
}

.socialLogos img {
  width: 50px;
  max-width: 100%;
  height: auto;
  transition: all 0.3s ease;
  opacity: 0.8;
}

.socialLogos:hover img {
  opacity: 1;
  transform: scale(1.1);
}
</style>
