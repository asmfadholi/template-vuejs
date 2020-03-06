<template>
  <div>
    <div>
      <h2> {{ dataState.detail.name }} </h2>
      <h3> {{ dataState.detail.score }} </h3>
    </div>
    <button @click="backRoute">Back</button>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Detail',
  computed: {
    ...mapState('MotoStore', ['dataState'])
  },
  methods: {
    backRoute () {
      this.$router.replace('/')
    }
  }
}
</script>

<style lang="scss">
  .warning {
    background: yellow
  }
</style>
