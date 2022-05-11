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
               
                <b-button class="btn" type="is-ghost"><div><p>Melhor lojas</p> <i class="ri-heart-3-line"></i></div></b-button>
                <b-button class="btn" type="is-ghost"><div><p>Ofertas</p> <i class="ri-fire-line"></i></div></b-button>
                <b-button class="btn" type="is-ghost"><div><p>Cupons</p><i class="ri-price-tag-3-line"></i></div></b-button>
            </div>

        </nav>
    </header>
    </div>
</template>


<style scoped lang="scss">

.banner{
    color: #f46036;
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
     background-color: #f46036;
   
   .navbar {
    background-color: #f46036;
    justify-content: space-between;
    padding: 10px 0;
    margin: 0 32px;
    align-items: center;
    .navbar-brand{
  
      a{
        color: #fff;
      }
    }

    .btn{
        
        align-items: center;
        color: #fff;

        div{
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