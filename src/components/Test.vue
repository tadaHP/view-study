<template>
    <div>
      <p>This is <strong>Vue Component</strong> content</p>
      <p>{{ componentText }}</p>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      componentText: {
        type: String,
        required: true
      }
    }
  }
  </script>