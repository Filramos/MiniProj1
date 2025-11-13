<template>
  <div id="quemsoueu">
    <h1>Quem Sou</h1>
    <div class="row">
      <div class="col-12 col-lg-3 order-1 order-lg-0">
        <img
          class="sectionImg"
          src="/img/quemsou/whoami.jpg"
          alt="Quem Sou Images"
        />
      </div>
      <div class="col-12 col-lg-9 text-left order-0 order-lg-1">
        <p>
          Olá! Sou um entusiasta de tecnologia e um apaixonado por programação.
          Para mim, o código é mais do que apenas lógica; é uma ferramenta
          poderosa para criar soluções, resolver problemas e construir o futuro.
        </p>

        <p>
          Desde cedo, a minha curiosidade levou-me a explorar o mundo da
          tecnologia, e hoje transformei essa paixão na minha área de foco.
          Estou sempre a aprender novas 'stacks', a experimentar novas
          ferramentas e a procurar o próximo desafio.
        </p>

        <p>
          Mas a vida não é só feita de ecrãs. Encontro o meu equilíbrio fora do
          código, seja na emoção de um bom jogo de futebol ou a planear a
          próxima viagem para um destino desconhecido. Acredito que estas
          experiências diferentes enriquecem a minha perspetiva.
        </p>

        <p>
          Este portfólio é uma janela para o meu trabalho e para esta jornada.
          Bem-vindo!
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "QuemSouSection",
};
</script>

<style scoped>
h1 {
  text-align: center;
  color: #ffffff;
  margin-bottom: 30px;
  font-weight: 600;
}

#quemsoueu p {
  font-size: 1.1rem;
  line-height: 1.7;
  color: #333;
  margin-bottom: 20px;
}

.router-link-active.router-link-exact-active::before {
  content: "\25b2";
  position: absolute;
  top: 68%;
  left: 50%;
  margin-left: -10px;
  color: #42b983;
}
</style>
