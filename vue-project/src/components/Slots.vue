<script>
import ChildSlots from './ChildSlots.vue'

export default {
  components: {
    ChildSlots
  },
  data() {
    return {
      msg: 'from parent'
    }
  }
}
</script>

<template>
  <ChildSlots>Message: {{ msg }}</ChildSlots>
</template>