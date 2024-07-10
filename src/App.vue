<template>
  <div id="app">
    <button @click="count++">{{ count }}</button>
  </div>

  <div>
    <span>메세지: {{ msg }}</span>
  </div>

  <div>
    <p>v-html 디렉티브 사용: <span v-html="rawHtml"></span></p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 0,
      msg: 'Hello Vue!',
      rawHtml: '<span style="color: red">빨간색 테스트</span>'
    }
  }
}
</script>