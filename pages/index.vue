<template>
  <div>
    <header>
      <Header />
      <FeaturedBanner
        title="Título da página"
        description="Informação curta e aberta sobre o app divulgado na página com foco nas funcionalidades"
      />
    </header>
    <main>
      <CardsList />
      <PromoVideo />
      <FeaturedCompanies />
      <FeaturedBanner
        title="Título da página"
        description="Informação curta e aberta sobre o app divulgado na página com foco nas funcionalidades"
        reverse
      />
      <Carousel />
      <Footer />
    </main>
  </div>
</template>

<script>
import Header from '@/components/organisms/Header'
import FeaturedBanner from '@/components/organisms/FeaturedBanner'
import CardsList from '@/components/organisms/CardsList'
import PromoVideo from '@/components/organisms/PromoVideo'
import FeaturedCompanies from '@/components/organisms/FeaturedCompanies'
import Carousel from '@/components/organisms/Carousel'
import Footer from '@/components/organisms/Footer'

export default {
  components: {
    Header,
    FeaturedBanner,
    CardsList,
    PromoVideo,
    FeaturedCompanies,
    Carousel,
    Footer
  }
}
</script>

<style lang="scss" scoped>
header {
  padding-bottom: 100px;
}
</style>
