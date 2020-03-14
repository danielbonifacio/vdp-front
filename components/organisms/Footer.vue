<template>
  <footer>
    <div class="ad">
      <Container>
        <div class="extension">
          <div class="icon">
            <img
              src="~/assets/chrome.png"
              alt="Google Chrome"
            >
          </div>
          <div class="info">
            <strong>Instale a extensão no seu Google Chrome</strong> <br>
            texto de apoio para o título
          </div>
        </div>
        <div class="app">
          <div class="info">
            <strong>Baixe nosso app</strong> e não fique de fora do que acontece no produto.
          </div>
          <div class="download">
            <div class="google-play">
              <img src="~/assets/google-play.png" alt="Disponível no Google Play">
            </div>
            <div class="app-store">
              <img src="~/assets/download-on-the-app-store-badge-ptbr-rgb-blk-092917.png" alt="Disponível no App Store">
            </div>
          </div>
        </div>
      </Container>
    </div>
    <div class="links">
      <Container>
        <div class="links-list">
          <span class="title">Sobre</span>
          <ul>
            <li><a href="#">Quem somos</a></li>
            <li><a href="#">Imprensa</a></li>
            <li><a href="#">Trabalhe conosco</a></li>
            <li><a href="#">Termos de Privacidade</a></li>
          </ul>
        </div>
        <div class="links-list">
          <span class="title">Destaques</span>
          <ul>
            <li><a href="#">Quem somos</a></li>
            <li><a href="#">Imprensa</a></li>
            <li><a href="#">Trabalhe conosco</a></li>
            <li><a href="#">Termos de Privacidade</a></li>
          </ul>
        </div>
        <div class="links-list">
          <span class="title">Contato</span>
          <ul>
            <li><a href="#">Quem somos</a></li>
            <li><a href="#">Imprensa</a></li>
            <li><a href="#">Trabalhe conosco</a></li>
          </ul>
        </div>
        <div class="links-list">
          <span class="title">Redes sociais</span>

          <div class="socials">
            <div class="social-media">
              <img src="~/assets/facebook.png" alt="Facebook page">
            </div>
            <div class="social-media">
              <img src="~/assets/instagram.png" alt="Facebook page">
            </div>
            <div class="social-media">
              <img src="~/assets/twitter.png" alt="Facebook page">
            </div>
            <div class="social-media">
              <img src="~/assets/youtube.png" alt="Facebook page">
            </div>
          </div>
        </div>
      </Container>
      <Container>
        <div class="disclaim">
          O Vigia de Preço atualiza periodicamente todos os preços das lojas anunciantes. Então, caso você tenha achado um preço diferente, com certeza esse preço foi atualizado pela loja durante esse período de atualização, nesses casos o preço válido é sempre o da loja anunciante. Para que você possa aproveitar as ofertas e comprar pelo menor preço sugerimos cadastrar um alerta de preços disponível em nosso app ou extensão, assim, se o produto voltar a ser anunciado pelo preço que você viu enviaremos uma notificação no seu e-mail para que você aproveite a oferta.
        </div>
      </Container>
    </div>
  </footer>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
footer {
  .ad {
    background: #A5D207;
    color: #000;
    height: 110px;

    @media screen and (max-width: 768px) {
      padding: 16px 0;
      height: auto;
    }

    .container {
      height: 100%;
      display: flex;
      align-items: center;
    }

    .extension,
    .app {
      flex: 1;
    }

    .extension {
      display: flex;
      align-items: center;

      .icon {
        margin: 0 12px 0 24px;
        height: 24px;
        width: 24px;
      }

      @media screen and (max-width: 1110px) {
        display: none;
      }
    }

    .app {
      display: flex;
      @media screen and (max-width: 768px) {
        flex-direction: column;
      }

      > div {
        flex: 1;
      }

      .download {
        display: flex;
        justify-content: flex-end;

        @media screen and (max-width: 1376px) {
          align-items: center;
          flex-wrap: no-wrap;
          flex-grow: 2;
        }

        @media screen and (max-width: 768px) {
          margin-top: 16px;
          justify-content: space-between;
        }

        > div {
          &:not(:last-child) {
            margin-right: 24px;
          }

          img {
            cursor: pointer;
            transition: .25s ease;
            height: 45px;

            &:hover {
              transform: scale(1.05);
            }
          }
        }
      }
    }
  }

  .links {
    background: #415400;
    color: #ffffff;
    padding: 24px;

    .container {
      display: flex;
      padding: 0 24px;

      @media screen and (max-width: 768px) {
        flex-direction: column;
        padding: 0;
      }
    }

    .links-list {
      flex: 1;

      @media screen and (max-width: 768px) {
        &:not(:last-of-type) {
          margin-bottom: 24px;
        }
      }

      .title {
        font-size: 1.2em;
        font-weight: 600;
        margin-bottom: 16px;
        display: inline-block;
      }

      .socials {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      ul {
        list-style: none;

        li {
          padding: 4px 0;

          @media screen and (max-width: 768px) {
            font-size: 0.95em;
            font-weight: 300;
          }

          a {
            color: #ffffff;

            &:not(:hover) {
              text-decoration: none;
            }
          }
        }
      }
    }

    .disclaim {
      margin-top: 24px;
      font-size: .8em;
      line-height: 1.5;
      font-weight: 300;
    }
  }
}
</style>
