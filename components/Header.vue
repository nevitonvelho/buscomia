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

            <NuxtLink  class="navbar-item" to="/">
             busconomia
            </NuxtLink>

            

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
               
                <b-button class="btn" type="is-ghost"><NuxtLink to="/lojas"><span>Melhor lojas</span> <i class="ri-heart-3-line"></i></NuxtLink></b-button>
                <b-button class="btn" type="is-ghost"><NuxtLink to="/"><span>Ofertas</span> <i class="ri-fire-line"></i></NuxtLink></b-button>
                <b-button class="btn" type="is-ghost"><NuxtLink to="/cupons"><span>Cupons</span><i class="ri-price-tag-3-line"></i></NuxtLink></b-button>

                <button class="createUser" type="is-ghost"><NuxtLink to="/login"><span>Entrar</span></NuxtLink></button>
                <button class="login"><NuxtLink to="/login"><span>Cadastrar</span><i class="ri-user-line"></i></NuxtLink></button>
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

    .createUser{
        align-items: center;
        background-color: transparent;
        a{
            color: #fff;
            display: flex;
            p{
                margin: 0 3px;
            }
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
            span{
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