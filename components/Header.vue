<template>
    <div>
        <div class="banner">
            Melhores lojas com melhores preço!! <img src="../assets/img/icons8-ok.svg" alt="icon">
        </div>
        <header class="heder-container">  
        <nav
        class="navbar header has-shadow"
        role="navigation"
        aria-label="main navigation"
        >
        <div class="navbar-brand">
            <a
            class="navbar-item"
            href="/"
            >
            busconomia
            </a>

            

        </div>
            <div>
                <b-field>
                <b-input placeholder="Busca ofertas"
                    type="search"
                    icon="magnify"
                    icon-clickable
                    @icon-click="searchIconClick"
                    rounded    
                >
                </b-input>

                
            </b-field>
            </div>

            <div>
               
                <b-button class="btn" type="is-ghost"><a href="/lojas"><p>Melhor lojas</p> <i class="ri-heart-3-line"></i></a></b-button>
                <b-button class="btn" type="is-ghost"><a><p>Ofertas</p> <i class="ri-fire-line"></i></a></b-button>
                <b-button class="btn" type="is-ghost"><a href="/cupons"><p>Cupons</p><i class="ri-price-tag-3-line"></i></a></b-button>


                <button class="login"><a href="#"><p>Entrar</p><i class="ri-user-line"></i></a></button>
            </div>

        </nav>
    </header>
    </div>
</template>


<style scoped lang="scss">

.banner{
    color: #072ac8;
    font-weight: 600;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: center;

    img{
        margin-left: 5px;
        width: 22px;
    }
}
 .heder-container{
     background-color: #072ac8;
   
   .navbar {
    background-color: #072ac8;
    justify-content: space-between;
    padding: 10px 0;
    margin: 0 32px;
    align-items: center;
    .navbar-brand{
  
      a{
        color: #fff;
      }
    }

    .login{
        align-items: center;
        background-color: #22120e5b;
        padding: 12px;
        border-radius: 22px;
        a{
            color: #fff;
            display: flex;
            p{
                
                margin: 0 3px;

            }
        }
    }

    .btn{
        
        align-items: center;

        a{
            color: #fff;
            display: flex;
            p{
                margin: 0 3px;
            }
        }
    }
  }
   
 }
</style>

<script>
export default {
    name: 'Header',
}
</script>