<template>
  <div>
    <div><h1>Feeds</h1></div>
    <div v-if="loading">Loading</div>
    <div v-else>
      <ul>
        <li :key="post.id" v-for="post in posts">{{ post.title }}</li>
      </ul>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions } from 'vuex'
export default {
  created() {
    this.getPosts()
  },
  methods: {
    ...mapActions({
      getPosts: 'feed/getPosts',
    }),
  },
  computed: {
    ...mapState({
      posts: state => state.feed.posts,
      loading: state => state.feed.loading,
    }),
  },
}
</script>
