<template>
  <article class="prouct-card" tabindex="0">
    <div
      class="price-diff"
      :style="`background-color: ${diffBadge.color}`"
    >
      <img :src="arrow">
      {{ diff }}%
    </div>
    <div class="image">
      <img :src="image" :alt="title">
    </div>
    <div class="title">
      <Heading level="3">
        {{ title }}
      </Heading>
    </div>
    <div class="sold-by">
      <p>
        Vendido por <strong>Shopify</strong>
      </p>
    </div>
    <div class="price">
      R$ {{ price }}
    </div>
  </article>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },

    price: {
      type: [String, Number],
      required: true
    },

    image: {
      type: String,
      required: true
    },

    diff: {
      type: Number,
      default: 0
    }
  },

  computed: {
    diffBadge () {
      return {
        diff: this.diff,
        color: this.getColor(this.diff)
      }
    },

    arrow () {
      return require(`@/assets/${this.diff < 0 ? 'down' : 'up'}-arrow.png`)
    }
  },

  methods: {
    getColor (diff) {
      if (diff > 10) {
        return '#DD2C00'
      }

      if (diff > 5) {
        return '#FF9800'
      }

      if (diff > 0) {
        return '#FFC107'
      }

      if (diff <= 0) {
        return '#00C853'
      }

      // this color will neve be reached.
      // see readme for more details
      if (diff <= 10) {
        return '#1B5E20'
      }
    }
  }
}
</script>

<style lang="scss">
.prouct-card {
  height: 430px;
  border: 1px solid #ccc;
  border-radius: 10px;
  position: relative;

  @media screen and (max-width: 768px) {
    max-width: 305px;
  }

  cursor: pointer;
  transition: .25s ease;

  &:hover,
  &:focus {
    box-shadow: 0 5px 10px $shadow;
    transform: translateY(-3px);
  }

  .price-diff {
    position: absolute;
    top: 10px;
    width: 75px;
    white-space: nowrap;
    left: 0;

    color: #ffffff;

    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    padding: 10px;

    font-weight: 700;
  }

  .image {
    margin: 20px 10px 10px ;
    height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      max-width: 100%;
      max-height: 100%;
    }
  }

  .title {
    text-align: center;
    max-width: 80%;
    margin: 24px auto;

    h3 {
      font-size: 1em;
      color: #333;
    }
  }

  .sold-by {
    position: absolute;
    bottom: 90px;
    width: 100%;
    font-size: .9em;
    text-align: center;

    strong {
      color: #58B9D8;
    }
  }

  .price {
    position: absolute;
    bottom: 40px;
    width: 100%;
    text-align: center;

    color: #5555D9;
    font-size: 1.4em;
    font-weight: 700;
  }
}
</style>
