<template>
  <div class="logos-group">
    <div
      v-for="i in multiplier"
      :key="i"
      class="logo"
      :style="`background-color: ${getColor(i) || '#FFFFFF'}`"
    >
      <img src="~/assets/logo-placeholder-2-x.png" alt="Logo">
    </div>
  </div>
</template>

<script>
import { isTablet, isMobile } from '../../utils/responsivity'

export default {
  data () {
    return {
      rows: (isMobile() || isTablet()) ? 3 : 4,
      latestSum: 0,
      colorIndex: 0,
      iterator: 0,
      colors: {},
      colorPalette: ['#1DA1F2', '#FF4600', '#9746D5', '#FEDB00']
    }
  },

  computed: {
    multiplier () {
      return this.rows * this.rows
    }
  },

  mounted () {
    this.fixRows()
    this.updateColors()

    window.addEventListener('resize', () => {
      this.rows = (isTablet() || isMobile()) ? 3 : 4
      this.updateColors()
    })
  },

  methods: {
    updateColors () {
      let gapCounter = 0
      let colorIndex = 1

      const colors = {
        1: this.colorPalette[0]
      }

      for (let i = 1; i <= this.multiplier; i++) {
        if (gapCounter === this.rows + 1) {
          gapCounter = 0
          colors[i] = this.colorPalette[colorIndex]
          colorIndex++
        }
        gapCounter++
      }

      this.colors = colors
    },

    getColor (i) {
      return this.colors[i]
    },

    fixRows () {
      this.rows = (isTablet() || isMobile()) ? 3 : 4
    }
  }
}
</script>

<style lang="scss">
.logos-group {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 1fr);
  grid-gap: 24px;

  .logo {
    border-radius: 10px;
    box-shadow: 0 10px 10px rgba(74, 74, 74, 0.15);
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
  }
}
</style>
