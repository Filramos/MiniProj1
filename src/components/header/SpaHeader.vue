<template>
  <header class="sticky-header">
    <div id="mainRowHeader" class="row">
      <div id="navMenu" class="col-4 col-lg-7 partesMenu order-0 order-lg-1">
        <nav class="navbar navbar-expand-lg">
          <button
            id="btn-MenuPrincipal"
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <router-link class="nav-link" to="/quemsou"
                  >Quem Sou</router-link
                >
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/oquefaco"
                  >O Que Faço</router-link
                >
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/hobbies"
                  >Hobbies</router-link
                >
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <div id="navLogo" class="col-4 col-lg-1 partesMenu order-1 order-lg-0">
        <router-link class="navbar-brand" to="/">
          <img id="headerLogo" src="/img/logoMeitw.png" alt="Logo"
        /></router-link>
      </div>
      <div id="dadosPessoais" class="col-4 partesMenu order-2">
        <span
          >Filipe Ramos<br /><a
            href="mailto:2501446@estudante.uab.pt?subject=Contacto via Projecto SPA"
            >@2302570</a
          ></span
        >
      </div>
    </div>
  </header>
</template>

<script>
export default {};
</script>

<style scoped>
header {
  height: 50px;
}

#mainRowHeader {
  max-width: 1280px;
  margin: auto;
}

.sticky-header {
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  height: 60px;
  margin-bottom: 20px;
  background-color: #2c3e50;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

#btn-MenuPrincipal {
  background-color: #ecf0f1;
  margin-left: 10px;
  margin-top: 6px;
  padding: 2px;
  width: 40px;
  height: 40px;
}

#headerLogo {
  height: 60px;
  width: auto;
  margin: 5px 0;
}

.partesMenu {
  background-color: #2c3e50;
  color: #ecf0f1;
  max-height: 70px;
}

#dadosPessoais {
  text-align: right;
}

#dadosPessoais span {
  margin-top: 20px;
  margin-right: 10px;
  display: block;
  font-size: 12px;
}

#dadosPessoais span a {
  text-decoration: none;
  color: inherit;
  transition: color 0.3s ease;
}

/* Efeito hover no link de email */
#dadosPessoais span a:hover {
  color: #42b983;
}

.nav-item {
  margin-left: 10px;
  margin-right: 10px;
}

.nav-link {
  color: #ecf0f1;
  cursor: pointer;
  text-align: left;
  padding: 15px;
  font-weight: 500;
  transition: all 0.3s ease;
}
@media (min-width: 993px) {
  .nav-link:hover {
    cursor: pointer;
    background-color: transparent;
    /* Cor verde no hover */
    color: #42b983 !important;
  }

  .router-link-active.router-link-exact-active.nav-link {
    color: #42b983;
    line-height: 24px;
    border-bottom: 8px solid #42b983;
    position: relative;
    display: inline-block;
  }

  .router-link-active.router-link-exact-active.nav-link::before {
    content: "\25b2";
    position: absolute;
    top: 68%;
    left: 50%;
    margin-left: -10px;
    /* Triângulo verde */
    color: #42b983;
  }
}
@media (max-width: 992px) {
  .navbar-toggler:focus {
    box-shadow: none;
  }

  #navbarNav {
    background-color: #2c3e50;
    color: #ecf0f1;
    margin-top: 16px;
    border-right: 1px solid #dee2e6;
    margin-left: -12px;
  }

  .nav-item {
    margin-left: 0;
    margin-right: 0;
  }

  .nav-link {
    border-bottom: 1px solid #34495e;
    padding-right: 0;
    padding-left: 22px;
  }

  .nav-link:hover {
    cursor: pointer;
    background-color: #34495e;
    color: #42b983 !important;
  }

  .router-link-active.router-link-exact-active.nav-link {
    background-color: #42b983;
    color: #ffffff;
    text-decoration: none;
  }
}
@media (max-width: 480px) {
  .nav-item {
    font-size: 12px;
  }
}
</style>
