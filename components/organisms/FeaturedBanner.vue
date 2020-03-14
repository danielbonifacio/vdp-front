<template>
  <Container>
    <div class="featured-banner" :class="{ 'reverse': reverse }">
      <img
        v-if="reverse"
        class="effect"
        src="~/assets/fx/phones_effect.svg"
      >
      <div class="info">
        <h2>
          {{ title }}
        </h2>
        <p>
          {{ description }}
        </p>
        <div class="download">
          <div class="google-play">
            <img src="~/assets/google-play.png" alt="Disponível no Google Play">
          </div>
          <div class="app-store">
            <img src="~/assets/download-on-the-app-store-badge-ptbr-rgb-blk-092917.png" alt="Disponível no App Store">
          </div>
        </div>
      </div>
      <div class="image">
        <img
          :src="image"
          alt="App demo"
        >
      </div>
    </div>
  </Container>
</template>

<script>
export default {
  props: {
    reverse: {
      type: Boolean
    },

    title: {
      type: String,
      required: true
    },

    description: {
      type: String,
      required: true
    }
  },

  computed: {
    image () {
      return require(`@/assets/${this.reverse ? 'phones-reverse' : 'phones'}.png`)
    }
  }
}
</script>

<style lang="scss">
.featured-banner {
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    margin: 48px 0;
  }

  @media screen and (max-width: 1110px) {
    div:nth-child(1) {
      padding-right: 8px;
    }

    div:nth-child(2) {
      padding-left: 8px;
    }
  }

  &.reverse {
    flex-direction: row-reverse;
    position: relative;

    .effect {
      position: absolute;
      width: 800px;
      top: 0;
      left: -200px;
      z-index: -1;

      @media screen and (max-width: 1110px) {
        display: none
      }
    }

    @media screen and (max-width: 768px) {
      flex-direction: column-reverse;
    }

    .image {
      justify-content: flex-start;

      @media screen and (max-width: 768px) {
        margin-bottom: 24px;
      }
    }

    @media screen and (max-width: 1110px) {
      div:nth-child(1) {
        padding-right: 0;
        padding-left: 8px;
      }

      div:nth-child(2) {
        padding-right: 8px;
        padding-left: 0;
      }
    }
  }

  .info {
    color: #454344;
    flex: 5;

    h2 {
      font-size: 2.3em;
      font-weight: 700;
      margin-bottom: 24px;

      @media screen and (max-width: 768px) {
        margin-bottom: 16px;
        font-size: 1.3em;
      }
    }

    p {
      font-size: 1.3em;
      line-height: 1.6em;

      @media screen and (max-width: 768px) {
        font-size: 1em;
      }
    }

    .download {
      display: flex;
      margin-top: 40px;

      @media screen and (max-width: 1110px) {
        margin: 24px 0;
        height: 40px;

        >div:nth-child(2) {
          display: flex;
          justify-content: flex-end;
        }
      }

      >div {
        flex: 1;

        img {
          transition: .25s ease;
          cursor: pointer;

          @media screen and (max-width: 1110px) {
            height: 40px;
          }

          &:hover {
            transform: scale(1.1);
          }
        }
      }
    }
  }

  .image {
    flex: 6;
    display: flex;
    justify-content: center;
  }
}
</style>
