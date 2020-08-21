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
import { mapState, mapMutations } from 'vuex'
export default {
  methods: {
    ...mapMutations({
      increment: 'counter/increment',
      decrement: 'counter/decrement',
    }),
  },
  computed: {
    ...mapState({
      count: (state) => state.counter.count,
    }),
  },
}
</script>
