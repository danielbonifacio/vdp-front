<template>
  <section id="featured-companies">
    <Container>
      <div class="title">
        <Heading level="3">
          Marcas do app em destaque
        </Heading>
      </div>

      <div class="companies">
        <div class="text">
          <div
            v-for="i in 3"
            :key="i"
            class="company"
          >
            <div class="company-name">
              <Heading level="3">
                Título
              </Heading>
            </div>
            <div class="company-description">
              <p>
                Marcação de texto para ser preenchido depois da página ficar pronta, enquanto isso segue com o texto marcando a página.
              </p>
            </div>
          </div>
        </div>
        <div class="logos">
          <LogosGroup />
        </div>
      </div>
    </Container>
  </section>
</template>

<script>
import LogosGroup from '@/components/molecules/LogosGroup'
export default {
  components: { LogosGroup }
}
</script>

<style lang="scss" scoped>
#featured-companies {
  padding: 0 0 100px;

  @media screen and (max-width: 1110px) {
    padding: 0 0 48px;
  }

  .container {
    display: flex;
    flex-direction: column;
  }

  .title h3 {
    font-size: 2.5em;
    margin-bottom: 100px;
    text-align: center;

    @media screen and (max-width: 768px) {
      font-size: 1.2em;
      margin-bottom: 48px;
    }
  }

  .companies {
    display: flex;

    @media screen and (max-width: 1110px){
      flex-direction: column-reverse;
    }

    .text {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      @media screen and (max-width: 1110px){
        margin-top: 24px;
        text-align: center;
        padding: 0 8px 0 0;
      }

      .company {

        @media screen and (max-width: 768px){
          &:not(:last-child) {
            margin-bottom: 48px;
          }
        }

        .company-name h3 {
          font-size: 1.4rem;
          margin-bottom: 20px;

          @media screen and (max-width: 768px){
            font-size: 1.2rem;
            margin-bottom: 16px;
          }
        }

        .company-description {
          max-width: 480px;

          @media screen and (max-width: 1110px) {
            max-width: 100%;
          }

          p {
            font-size: 1.3em;
            line-height: 1.4em;

            @media screen and (max-width: 1110px) {
              font-size: 1em;
              line-height: 1.4em;
            }

          }
        }
      }
    }

    .logos {
      flex: 1;

      @media screen and (max-width: 1110px){
        padding: 0 0 0 8px;
      }
    }
  }
}
</style>
