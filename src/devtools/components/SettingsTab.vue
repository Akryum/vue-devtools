<template>
  <div id="settings-tab">
    <split-pane class="pane" :default-split="33">
      <div class="entries" slot="left">
        <div class="entry" :class="{ active: activeEntry === 'general' }">General</div>
      </div>
      <div class="settings-content" slot="right">

      </div>
    </split-pane>
  </div>
</template>

<script>
import { mapState } from 'vuex'

import SplitPane from './SplitPane.vue'

export default {
  components: {
    SplitPane
  },
  computed: mapState({
    activeEntry: ({ settings }) => settings.activeEntry
  })
}
</script>

<style lang="stylus" scoped>
$blue = #44A1FF

.pane
  height 100%

.entry
  color #881391
  cursor pointer
  padding 10px 20px
  font-size 14px
  background-color #fff
  box-shadow 0 1px 5px rgba(0,0,0,.12)
  &.active
    color #fff
    background-color $blue
</style>
