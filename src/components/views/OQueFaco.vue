<template>
  <div id="oquefaco">
    <h1>O que Faço</h1>
    <div class="row">
      <div class="col-12 col-lg-9 text-left order-0">
        <p>
          Como programador, o meu foco principal é o
          <strong>desenvolvimento Android</strong>. Adoro construir aplicações
          'mobile' nativas que sejam rápidas, intuitivas e que tirem o máximo
          partido do dispositivo.
        </p>
        <p>
          Trabalho com <strong>Kotlin</strong> e <strong>Java</strong>, e com
          todo o ecossistema Android, desde o 'design' de 'layouts' (XML) até à
          gestão de ciclo de vida e APIs modernas como o Jetpack Compose.
        </p>
        <p>
          Além do Android, também tenho experiência como
          <strong>Full-Stack Developer</strong>. Sinto-me confortável a
          construir <strong>APIs em Java</strong> para suportar as aplicações
          móveis e a trabalhar com tecnologias web como
          <strong>JavaScript</strong>, <strong>Vue.js</strong> e
          <strong>React</strong>.
        </p>
        <p>
          Seja a otimizar o consumo de bateria numa app nativa ou a desenhar um
          'endpoint' eficiente, o meu objetivo é o mesmo: criar tecnologia de
        </p>
      </div>

      <div class="col-12 col-lg-3 order-1">
        <img
          class="sectionImg"
          src="/img/quefaco/androiddev.png"
          alt="O que faço Images"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "OqueFacoSection",
};
</script>

<style scoped>
h1 {
  text-align: center;
  color: #ffffff;
  margin-bottom: 30px;
  font-weight: 600;
}

#oquefaco p {
  font-size: 1.1rem;
  line-height: 1.7;
  color: #333;
  margin-bottom: 20px;
}

/* Destaque para as tecnologias */
#oquefaco strong {
  color: #34495e;
}
</style>
