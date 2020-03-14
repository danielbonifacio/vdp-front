<template>
  <section id="promo-video">
    <Container>
      <Heading level="3">
        Vídeo promocional do app
      </Heading>
      <p>
        O vídeo mostra todas as funcionalidades e você vai conferir como funciona e ver como é fácil e simples de usar o app, falando do uso e dos seus benefícios
      </p>
      <div class="embed">
        <VideoEmbed
          video-id="YTmRnw-G8Ds"
        />
      </div>
    </Container>
  </section>
</template>

<script>
import VideoEmbed from '@/components/atoms/VideoEmbed'

export default {
  components: {
    VideoEmbed
  }
}
</script>

<style lang="scss" socoped>
#promo-video {
  padding: 100px;

  @media screen and (max-width: 768px) {
    padding: 24px 0;
  }

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  h3 {
    font-size: 2.5em;
    margin-bottom: 24px;
    text-align: center;

    @media screen and (max-width: 768px) {
      font-size: 1.2em;
      margin-bottom: 16px;
    }
  }

  p {
    text-align: center;
    max-width: 1000px;
    font-size: 1.3em;
    line-height: 1.6em;
    margin-bottom: 40px;

    @media screen and (max-width: 768px) {
      font-size: 1em;
      line-height: 1.4em;
      margin-bottom: 16px;
    }
  }

  .embed {
    width: 100%;
    max-width: 1000px;
  }

}
</style>
