<template>
  <div class="card">
    <div class="icon">
      <img :src="image" :alt="iconAlt">
    </div>
    <div class="title">
      <Heading level="3">
        {{ title }}
      </Heading>
    </div>
    <div class="description">
      {{ description }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },

    icon: {
      type: String,
      required: true
    },

    iconAlt: {
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
      return require(`@/assets/${this.icon}.png`)
    }
  }
}
</script>

<style lang="scss" scoped>
.card {
  border-radius: 10px;
  background-color: #FFFFFF;
  box-shadow: 0 5px 10px rgba(0,0,0,.3);

  min-height: 350px;
  padding: 40px 50px;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .icon {
    margin-bottom: 16px;
  }

  .title {
    margin-bottom: 16px;

    h3 {
      font-size: 1.4em;
      font-weight: 600;
    }
  }

  .description {
    text-align: center;
    line-height: 1.5em;
  }

  @media screen and (max-width: 768px) {
    padding: 16px;
    min-height: 0;

    .icon {
      width: 48px;
    }

    .title {
      h3 {
        font-size: 1.2em;
      }
    }

    .description {
      font-size: 0.8em;
    }
  }
}
</style>
