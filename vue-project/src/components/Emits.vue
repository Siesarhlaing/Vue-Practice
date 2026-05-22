<script>
import ChildEmits from './ChildEmits.vue'

export default {
  components: {
    ChildEmits
  },
  data() {
    return {
      childMsg: 'No child msg yet'
    }
  }
}
</script>

<template>
  <ChildEmits @response="(msg) => childMsg = msg" />
  <p>{{ childMsg }}</p>
</template>