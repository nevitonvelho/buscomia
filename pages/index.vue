<template>
  <mean class="contentPage">
    <Banner class="banner"/>
    <section class="contUm">
      <h2>Lojas online em destaque</h2>

      <div class="containerCard">
        <div class="card">
            <img src="../assets/img/americanas.png" alt="logo Empresa promoção">
            <p>8% de volta</p>
            <span>desconto</span>
        </div>
        <div class="card">
            <img src="../assets/img/aliexpress.png" alt="logo Empresa promoção">
            <p>8% de volta</p>
            <span>desconto</span>
        </div>

        <div class="card">
            <img src="../assets/img/amazon2.png" alt="logo Empresa promoção">
            <p>8% de volta</p>
            <span>desconto</span>
        </div>

        <div class="card">
            <img src="../assets/img/casas-bahia.png" alt="logo Empresa promoção">
            <p>8% de volta</p>
            <span>desconto</span>
        </div>

        <div class="card">
            <img src="../assets/img/natura.png" alt="logo Empresa promoção">
            <p>8% de volta</p>
            <span>desconto</span>
        </div>

        <div class="card">
            <img src="../assets/img/rentcars.png" alt="logo Empresa promoção">
            <p>8% de volta</p>
            <span>desconto</span>
        </div>

        <div class="card">
            <img src="../assets/img/shopee.png" alt="logo Empresa promoção">
            <p>8% de volta</p>
            <span>desconto</span>
        </div>

        <div class="card">
            <img src="../assets/img/lenovo.png" alt="logo Empresa promoção">
            <p>8% de volta</p>
            <span>desconto</span>
        </div>

        <div class="card">
            <img src="../assets/img/studio-z.png" alt="logo Empresa promoção">
            <p>8% de volta</p>
            <span>desconto</span>
        </div>

        <div class="card">
            <img src="../assets/img/submarin.png" alt="logo Empresa promoção">
            <p>8% de volta</p>
            <span>desconto</span>
        </div>

        <div class="card">
            <img src="../assets/img/compra-certa.png" alt="logo Empresa promoção">
            <p>8% de volta</p>
            <span>desconto</span>
        </div>

        <div class="card">
            <img src="../assets/img/netshoes.png" alt="logo Empresa promoção">
            <p>8% de volta</p>
            <span>desconto</span>
        </div>
      </div>

    </section>
    
    <section class="containerBannerPromo">
      <div class="bannerPromo">
       <picture class="image">
          <img src="../assets/img/extension-banner-new.png" alt="">
       </picture>
        <div>
           <h2>Nunca perca um cupom!</h2>
           <p>Seja avisado quando a loja tiver cupons e cashback</p>
        </div>
        <button><a href=""><i class="ri-chrome-line"></i> Adicionar</a></button>
    </div>
    </section>

    <section class="promo">
      <h2 class="titleSectionPromo">Ofertas imperdíveis no Buscapé para você aproveita</h2>
       <div class="cardPromo">
         <div class="card">
           <div class="iconFire"><span class="icon-fire"><i class="ri-fire-fill"></i></span></div>
            <!-- <span>kdfhdfh</span> -->
            <img src="../assets/img/cell.jpg" alt="Image produto">

            <span class="precoant">R$ 6.499,00</span>
            <span class="precopromo">R$ 6.499,00</span>
            <div class="titleProduto">
              <h2>Smartphone <br> Samsung Galaxy A32 SM-A325M 128GB Android</h2>
            </div>
         </div>

         <div class="card">
           <div class="iconFire"><span class="icon-fire"><i class="ri-fire-fill"></i></span></div>
            <!-- <span>kdfhdfh</span> -->
            <img src="../assets/img/cell.jpg" alt="Image produto">

            <span class="precoant">R$ 6.499,00</span>
            <span class="precopromo">R$ 6.499,00</span>
            <div class="titleProduto">
              <h2>Smartphone <br> Samsung Galaxy A32 SM-A325M 128GB Android</h2>
            </div>
         </div>

         <div class="card">
           <div class="iconFire"><span class="icon-fire"><i class="ri-fire-fill"></i></span></div>
            <!-- <span>kdfhdfh</span> -->
            <img src="../assets/img/cell.jpg" alt="Image produto">

            <span class="precoant">R$ 6.499,00</span>
            <span class="precopromo">R$ 6.499,00</span>
            <div class="titleProduto">
              <h2>Smartphone <br> Samsung Galaxy A32 SM-A325M 128GB Android</h2>
            </div>
         </div>

         <div class="card">
           <div class="iconFire"><span class="icon-fire"><i class="ri-fire-fill"></i></span></div>
            <!-- <span>kdfhdfh</span> -->
            <img src="../assets/img/cell.jpg" alt="Image produto">

            <span class="precoant">R$ 6.499,00</span>
            <span class="precopromo">R$ 6.499,00</span>
            <div class="titleProduto">
              <h2>Smartphone <br> Samsung Galaxy A32 SM-A325M 128GB Android</h2>
            </div>
         </div>

         <div class="card">
           <div class="iconFire"><span class="icon-fire"><i class="ri-fire-fill"></i></span></div>
            <!-- <span>kdfhdfh</span> -->
            <img src="../assets/img/cell.jpg" alt="Image produto">

            <span class="precoant">R$ 6.499,00</span>
            <span class="precopromo">R$ 6.499,00</span>
            <div class="titleProduto">
              <h2>Smartphone <br> Samsung Galaxy A32 SM-A325M 128GB Android</h2>
            </div>
         </div>

         

         

        

        
       </div>
       
    </section>
  </mean>
</template>


<style scoped lang="scss">
.banne{
    margin: 0;
  }


.contUm{
    padding: 0px 52px;
    text-align: start;
    font-size: 22px;
    color: #3b3b3b;

    h2{
          font-weight: 600;
    }
    
  }

  

.containerCard{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  

  .card{
    align-items: center;
    justify-content: center;
    display: flex;
    padding: 30px;
    height: 180px;
    flex-direction: column;
    text-decoration: none;
    cursor: pointer;
    margin-bottom: 10px;


    img{
      width: 126px;
    }

    p{
      font-size: 18px;
      font-weight: 600;
      color: #000;
    }
    span{
      font-size: 15px;

    }
  }
  
}

.containerBannerPromo{
  padding: 0 52px;
}
.bannerPromo{
    background-color: #edf2fb;
    display: flex;
    border-radius: 12px;
    padding: 42px;
    align-items: center;
    margin: 22px 0;
    
    .image{
      img{
        margin-right: -40px;
        margin-bottom: -40px;
        min-width: 250px;
        vertical-align: middle;
      }
    }

    div {

      h2{
        font-size: 22px;
        color: #072ac8;
      }

      p{
        font-size: 16px;
        width: 80%;
      }

    }

      button{
        padding: 18px;
        background-color: #072ac8;
        
        border-radius: 12px;
        display: flex;


        a{
          color: #fff;
        }
      }
    
}


.promo{
  padding: 3px 52px;

  .titleSectionPromo{
    font-size: 22px;
    margin: 22px 0;
    font-weight: 600;
  }

  .cardPromo{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .card{
     
      margin-bottom: 22px;
      border: 0.1rem solid rgba(0, 0, 0, 0.144);
      display: flex;
      flex-direction: column;
      padding: 22px;
      max-width: 200px;


      .iconFire{
        margin-bottom: 1rem;
        cursor: pointer;
        .icon-fire{
          padding: 3px 7px;
          border-radius: 100%;
          border: 2px solid #072ac8;
          color: #072ac8;
          position: absolute;
          left: 150px;
          top: 12px;
          transition: 0.5s;
          &:hover{
            background: #072ac8;
            color: #ffffff;
          }
      }
      }

      .titleProduto{
        h2{
          
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }
      }

      .precoant{
        margin-top: 1rem;
        color: #666666;
        font-size: 1rem;
        text-decoration: line-through;
      }

      .precopromo{
        color: #072ac8;
        font-size: 1.2rem;
        font-weight: 600;
      }

      img{
        width: 176px;
      }
  }

  }
}
  
</style>


<script>
export default {
  name: 'IndexPage',
  components: {
    
  }
}
</script>
