<script>
import ChildProps from './ChildProps.vue'

export default {
  components: {
    ChildProps
  },
  data() {
    return {
      greeting: 'Hello from parent'
    }
  }
}
</script>

<template>
    <ChildProps :msg="greeting" />
  </template>