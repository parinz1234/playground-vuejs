<template>
  <div>
    Counter
    <p>total {{ count }}</p>
    <button @click="increment" type="button">+</button>
    <br />
    <button @click="decrement" type="button">-</button>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  methods: {
    increment() {
      // commit `increment` action
      this.$store.commit('increment')
    },
    decrement() {
      // commit `decrement` action
      this.$store.commit('decrement')
    },
  },
  computed: {
    ...mapState({
      count: state => state.count,
    }),
  },
}
</script>
