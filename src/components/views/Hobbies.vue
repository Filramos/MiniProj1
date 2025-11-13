<template>
  <div id="hobbies">
    <h1>Hobbies</h1>
    <div class="row">
      <div class="col-12 col-lg-3 order-1 order-lg-0">
        <img
          class="sectionImg"
          src="/img/hobbies/gym.jpg"
          alt="Hobbies Images"
        />
      </div>

      <div class="col-12 col-lg-9 text-left order-0 order-lg-1">
        <p>
          Para mim, os hobbies são essenciais para encontrar o equilíbrio.
          Depois de horas focado em lógica e código, preciso de me mexer e
          desafiar o corpo.
        </p>
        <p>
          Duas das minhas grandes paixões são o
          <strong>futebol</strong> e o <strong>exercício físico</strong>. Adoro
          a energia, a estratégia e o trabalho de equipa de um bom jogo de
          futebol. Nos outros dias, manter uma rotina de exercício no ginásio ou
          ao ar livre é fundamental para me manter focado e disciplinado.
        </p>
        <p>
          Quando procuro algo mais calmo, nada supera um bom livro. Seja para
          aprofundar conhecimentos técnicos ou para me perder numa boa ficção,
          <strong>ler</strong> é a minha forma preferida de desligar do digital
          e recarregar as energias mentais.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HobbiesSection",
};
</script>

<style scoped>
h1 {
  text-align: center;
  color: #ffffff;
  margin-bottom: 30px;
  font-weight: 600;
}

#hobbies p {
  font-size: 1.1rem;
  line-height: 1.7;
  color: #333;
  margin-bottom: 20px;
}

#hobbies strong {
  color: #34495e;
}
</style>
