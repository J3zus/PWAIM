<template>
    <div id="app">
    <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div  class="container-fluid">
                <a class="navbar-brand" href="#">
                    <img src="http://aimoficial.com//WebPage/server/public/src/img/aim_logo.png" class="img-fluid" alt="Responsive image" width="50">
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="#">Link</a>
                        </li>
                        <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Dropdown
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><a class="dropdown-item" href="#">Action</a></li>
                            <li><a class="dropdown-item" href="#">Another action</a></li>
                            <li><hr class="dropdown-divider"></li>
                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                        </li>
                    </ul>
                    <form class="d-flex">
                        <button class="button button4" type="submit">Search</button>
                    </form>
                </div>
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
  background-color: #eeec93;
  color: rgb(0, 0, 0);
}
@import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
</style>