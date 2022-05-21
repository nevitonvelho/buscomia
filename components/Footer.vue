<template>
    <footer class="container-footer">
        <div class="title-footer">
            <p>A maneira mais fácil de economizar na internet</p>
        </div>

        <div class="link-container">

            <div class="link">
                <p>Sobre nós</p>
                <ul>
                    <li><NuxtLink to="/">Quem somos?</NuxtLink></li>
                    <li><NuxtLink to="/">Trabalhe conosco</NuxtLink></li>
                    <li><NuxtLink to="/">Divulgue o busconomia</NuxtLink></li>
                    <li><NuxtLink to="/">Blog</NuxtLink></li>
                    <li><NuxtLink to="/">Termos de uso e privacidade</NuxtLink></li>
                </ul>
            </div>

            <div class="link">
                <p>Institucional</p>
                <ul>
                    <li><NuxtLink to="/">Quem somos?</NuxtLink></li>
                    <li><NuxtLink to="/">Comercial</NuxtLink></li>
                    <li><NuxtLink to="/">Fale conosco</NuxtLink></li>
                    <li><NuxtLink to="/">Trabalhe conosco</NuxtLink></li>
                    <li><NuxtLink to="/">busconomia na Mídia</NuxtLink></li>
                </ul>
            </div>

            <div class="link">
                <p>Institucional</p>
                <ul>
                    <li><NuxtLink to="/">Quem somos?</NuxtLink></li>
                    <li><NuxtLink to="/">Comercial</NuxtLink></li>
                    <li><NuxtLink to="/">Fale conosco</NuxtLink></li>
                    <li><NuxtLink to="/">Trabalhe conosco</NuxtLink></li>
                    <li><NuxtLink to="/">busconomia na Mídia</NuxtLink></li>
                </ul>
            </div>

            <div class="link">
                <p>Baixe o app</p>
                    <ul class="play-app">
                        <NuxtLink to="/"><img src="../assets/img/play-store-tag.png" alt=""></NuxtLink>
                        <NuxtLink to="/"><img src="../assets/img/app-store-tag.png" alt=""></NuxtLink>       
                    </ul>
                

                <p>Siga o busconomia</p>
                <ul class="redes-sociais">
                    <li><NuxtLink to="/"><i class="ri-facebook-circle-fill"></i></NuxtLink></li>
                    <li><NuxtLink to="/"><i class="ri-instagram-line"></i></NuxtLink></li>
                    <li><NuxtLink to="/"><i class="ri-youtube-fill"></i></NuxtLink></li>
                    <li><NuxtLink to="/"><i class="ri-twitter-line"></i></NuxtLink></li>
                </ul>
            </div>


        </div>

        

        <div class="footer-final">
            Feito com <span>❤</span> no Brasil para o mundo. © 2022
        </div>
    </footer>
</template>


<style scoped lang='scss'>
    .container-footer{
        padding: 0px 52px;
        background-color: #2e294e;
        color: #f1f1f1;

        .title-footer{
            padding: 22px;
            display: flex;
            align-content: center;
            justify-content: center;
        }


        .link-container{
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
        }

        .link{
            
            
            p{
                color: #f46036;
                font-size: 22px;
                margin-top: 1rem;
            }

            ul{
                li{
                    a{
                        font-weight: 200;
                        color: #ffffff;
                    }
                }
            }

            .play-app{
                margin-top: 1rem;
            }

            .redes-sociais{
                
                display: flex;
                font-size: 32px;
                

                a{
                    margin-right: 10px;
                }
            }
        }

        .footer-final{
            padding: 20px;
            display: flex;
            align-items: center;
            justify-content: center;

            span{
                color:#f46036;
                margin: 0 6px
            }
        }
    }
</style>