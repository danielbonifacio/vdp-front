<template>
  <div class="cards-list">
    <Container>
      <img class="effect" src="~/assets/fx/left_effect.svg">
      <InfoCard
        v-for="i in 3"
        :key="i"
        icon="alarm-clock-2"
        icon-alt="Relógio-despertador"
        title="Título"
        description="Texto corrido com informações que vão ser preenchidas depois que a página estiver pronta"
      />
    </Container>
  </div>
</template>

<script>
import InfoCard from '@/components/molecules/InfoCard'

export default {
  components: { InfoCard }
}
</script>

<style lang="scss" scoped>
.cards-list {
  background-color: #F7FFDC;
  padding: 100px 0;

  @media screen and (max-width: 768px) {
    padding: 36px 0;
  }

  .effect {
    position: absolute;
    width: 240px;
    top: -200px;
    left: -200px;
    z-index: 1;
  }

  .container {
    display: grid;

    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 40px;

    position: relative;

    > div {
      position: relative;
      z-index: 2;
    }

    @media screen and (max-width: 768px) {
      grid-template-columns: 1fr;
      grid-template-rows: 1fr 1fr 1fr;
    }
  }
}
</style>
