<template>
  <div >

    <Header/>
    <Banner/>
  
    <section>kdfh</section>
  </div>
</template>

<style scoped lang="scss">
 
</style>

<script>
export default {
  name: 'DefaultLayout',
  data () {
    return {
      items: [
        {
          title: 'Home',
          icon: 'home',
          to: { name: 'index' }
        },
        {
          title: 'Inspire',
          icon: 'lightbulb',
          to: { name: 'inspire' }
        }
      ]
    }
  }
}
</script>
