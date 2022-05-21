<template>
  <section class="container-cupom-page">
      <h1>Os Melhores Cupons de Desconto</h1>
    <div class="container-mean">

      <div class="container-um">
          <div class="card">
            <img src="../assets/img/aliexpress.png" alt="logo empresa">

            <div>
              <h2>Tenha R$15 de economia em todo o site com código AliExpress</h2>
              <span>+ 3% de cashback</span>
            </div>

            <button>Pegar desconto</button>
          </div>

          <div class="card">
            <img src="../assets/img/natura.png" alt="logo empresa">

            <div>
              <h2>Tenha R$15 de economia em todo o site com código AliExpress</h2>
              <span>+ 3% de cashback</span>
            </div>

            <button>Pegar desconto</button>
          </div>

          <div class="card">
            <img src="../assets/img/netshoes.png" alt="logo empresa">

            <div>
              <h2>Tenha R$15 de economia em todo o site com código AliExpress</h2>
              <span>+ 3% de cashback</span>
            </div>

            <button>Pegar desconto</button>
          </div>
      </div>

      <div class="container-dois">
        Ofertas em destaque
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
  .container-cupom-page{

    .container-mean{
      display: flex;
      justify-content: space-between;
    }
    padding: 42px;
    h1{
      font-size: 23px;
      color: #000;
    }

    .container-um{
      
      h2{
        color:#000;
      }

      .card{
        margin: 22px 0;
          padding: 22px;
          align-items: center;
          display: flex;
        div{
          margin: 0 22px;
  
          span{
            
            color: #f46036;
          }
        }
  
        button{
          padding: 22px;
          background-color: #f46036;
          border-radius: 30px;
          color: #fff;
          cursor: pointer;
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