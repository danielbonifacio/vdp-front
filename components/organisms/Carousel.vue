<template>
  <section id="most-viewed">
    <Container>
      <Heading level="2">
        Produtos mais acessados
      </Heading>
    </Container>
    <Container v-if="renderComponent" class="product-container">
      <div v-swiper:mySwiper="swiperOption">
        <div class="swiper-wrapper">
          <div v-for="product in products" :key="product.diff" class="swiper-slide">
            <ProductCard
              :title="product.title"
              :image="product.image"
              :diff="product.percentage"
              :price="product.price"
            />
          </div>
        </div>
        <div class="swiper-pagination swiper-pagination-bullets" />
      </div>

      <transition name="slide-fade">
        <div
          v-show="hasNext && !isMobile"
          class="slide-controller next"
        />
      </transition>

      <transition name="slide-fade">
        <div
          v-show="hasPrevious && !isMobile"
          class="slide-controller prev"
        />
      </transition>
    </Container>
  </section>
</template>

<script>
import ProductCard from '@/components/molecules/ProductCard'
import { isMobile } from '@/utils/responsivity'

export default {
  components: {
    ProductCard
  },

  data () {
    const vue = this
    return {
      renderComponent: true,
      isMobile: isMobile(),
      hasPrevious: false,
      hasNext: true,
      swiperOption: {
        breakpoints: {
          1366: {
            slidesPerView: 4,
            centeredSlides: false
          },
          1110: {
            slidesPerView: 3,
            centeredSlides: false
          },
          768: {
            slidesPerView: 2,
            centeredSlides: false
          },
          480: {
            slidesPerView: 'auto',
            centeredSlides: true
          }
        },
        slidesPerView: 4,
        spaceBetween: 16,
        direction: 'horizontal',
        navigation: {
          nextEl: '.next',
          prevEl: '.prev'
        },
        on: {
          slideChange (e) {
            vue.$data.hasPrevious = !!this.activeIndex
            vue.$data.hasNext = this.activeIndex < vue.products.length - this.params.slidesPerView
            vue.$forceUpdate()
            vue.fetchMoreData(this.activeIndex, this.params.slidesPerView)
          }
        }
      }
    }
  },

  computed: {
    products () {
      return this.$store.state['Products.store'].list
    }
  },

  mounted () {
    window.addEventListener('resize', () => {
      this.isMobile = isMobile()
      this.$forceUpdate()

      // maintain responsivity during window resize
      this.forceRerender()
    })
  },

  methods: {
    forceRerender () {
      // Remove my-component from the DOM
      this.renderComponent = false

      this.$nextTick(() => {
        // Add the component back in
        this.renderComponent = true
      })
    },

    fetchMoreData (currentIndex, viewLimit) {
      if (currentIndex + viewLimit >= this.products.length - 2) {
        this.$store.dispatch('Products.store/fetch')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.slide-fade-enter-active,
.slide-fade-leave-active  {
  transition: all .3s ease;
}

.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateX(10px);
  opacity: 0;
}

#most-viewed {
  margin: 100px 0;

  @media screen and (max-width: 768px) {
    margin: 48px 0;

    .swiper-slide {
      width: 75%;
    }
  }

  @media screen and (max-width: 480px) {
    .product-container {
      max-width: 100%;
      padding: 0;
    }
  }

  .container {
    position: relative;
  }

  .slide-controller {
    border: 1px solid #ccc;
    width: 45px;
    height: 45px;
    border-radius: 25px;
    position: absolute;
    top: calc(50% - 25px);
    cursor: pointer;
    transition: .25s ease;

    @media screen and (max-width: 768px) {
      display: none;
    }

    &:hover,
    &:focus {
      box-shadow: 0 0 10px rgba(0,0,0,.2);
    }

    &::after {
      margin-top: 4px; // visual adjustment
      content: url("~assets/next.png");
      display: flex;
      width: 100%;
      height: 100%;
      justify-content: center;
      align-items: center;
      color: green;
      font-weight: 900;
      font-size: 1.4em;
    }

    outline: none;

    &.next {
      right: -55px;
    }

    &.prev {
      left: -55px;

      &::after {
        transform: rotate(180deg);
        margin-top: -4px; // visual adjustment
      }
    }
  }

  h2 {
    font-size: 1.9em;
    font-weight: 600;

    @media screen and (max-width: 768px) {
      font-size: 1.3em;
    }
  }

  .swiper-wrapper {
    padding: 24px 0;
    position: relative;
  }
}
</style>
