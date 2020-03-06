<template>
  <div>
    <ul>
      <li v-for="(item, index) in dataState.list" :key="index">
        <a @click="detailStore(item)">
          {{ item.name }} <span :class="{ 'warning' : item.score < 60 }">{{ item.score }}</span>
        </a>
      </li>
    </ul>

    <div>
      <input type="text" v-model="name"> <input type="number" v-model.number="number">
      <button @click="addItem">Add</button>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Main',
  data () {
    return {
      data: [
        { id: 1, name: 'Zaid', score: 100 }
      ],
      name: '',
      number: 0
    }
  },
  computed: {
    ...mapState('MotoStore', ['dataState'])
  },
  created () {
    this.$store.dispatch('MotoStore/getDataList')
  },
  methods: {
    addItem () {
      this.$store.commit('MotoStore/addData', { name: this.name, score: this.number })
      // this.data.push({ name: this.name, score: this.number })
      this.name = ''
      this.number = ''
    },

    detailStore (item) {
      this.$store.commit('MotoStore/storeDetail', item)
      this.$router.replace('/detail')
    }
  }

}
</script>

<style lang="scss">
  .warning {
    background: yellow
  }
</style>
