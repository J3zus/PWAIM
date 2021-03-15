<template>
    <div id="app">
    <div>
<nav class="navbar navbar-expand-sm navbar-dark bg-dark " >
              <a href="/" class="navbar-brand">
                <img src="http://aimoficial.com/images/aim_logo.png" class="img-fluid" alt="Responsive image" width="70">
                </a>
              <button class="navbar-toggler" data-toggle="collapse" data-target="#navbarMenu">
                  <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarMenu">
                  <ul class="navbar-nav">
                      <li class="nav-item">
                          <router-link to="/" class="nav-link"><b class="letter" > Inicio </b></router-link>
                      </li>
                      <li class="nav-item">
                        <router-link  to="/Nosotros" class="nav-link"><b class="letter"> Nosotros</b ></router-link>
                      </li>
                      <li class="nav-item">
                          <router-link to="/contacto" class="nav-link"><b class="letter">Eventos</b ></router-link> 
                      </li>
                      <li class="nav-item">
                          <router-link to="/about" class="nav-link"><b class="letter">Información</b ></router-link>
                        </li>
                      <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <b class="letter"> Comunidad</b>
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><a class="dropdown-item" href="#">Bachilerato</a></li>
                            <li><a class="dropdown-item" href="#">Cápitulos universitario</a></li>
                            <li><hr class="dropdown-divider"></li>
                            <li><a class="dropdown-item" href="#">Profesionistas</a></li>
                        </ul>
                        </li>
                      
                      <!--
                      <li class="nav-item">
                          <router-link  to="/signup" class="nav-link">Signup </router-link>
                      </li>
                      -->
                  </ul>
                  <form class="d-flex">
                  <button class="button button4" type="submit">Unirse</button>
                  </form>
              </div>

      </nav>
    </div>
</div>
</template>

<style scoped>

.bg-dark {
    background-color: #000000!important;
}
.bg-light {
    background-color: #000000!important;
}

.just_text
        {
            margin-left: 2px !important;
            margin-right: 20px !important;
        }

.button {
  
  border: none;
  color: transparent;
  padding: 6px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  transition-duration: 0.4s;
  cursor: pointer;
}

.button4 {
  background-color: transparent;
  color: rgb(255, 255, 255);
  border: 1px solid #ffffff;
}

.button4:hover {
  background-color: #ffffff7c;
  color: rgb(0, 0, 0);
}
.letter{
/*font-size:19px;
//font-family:  "Segoe UI";
*/
font: sans-serif;
color:#ffffff;

}

@import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
</style>