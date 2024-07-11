<template>
  <div id="app">
    <button @click="count++">{{ count }}</button>
  </div>

  <div>
    <span>메세지: {{ msg }}</span>
  </div>

  <div>
    <p>v-html 디렉티브 사용: <p v-html="rawHtml"></p></p>
  </div>
  <div>
    <p>속성 바인딩: <p :style="testStyle">스타일 적용</p></p>
  </div>

  <div>
    <button :disabled="isButtonDisabled">버튼</button>
    <button :disabled="!isButtonDisabled">버튼2</button>
  </div>

  <div>
    <span>멀티 속성 바인딩: <p :id="multiAttribute.id" :style="multiAttribute.style">멀티 속성 바인딩 1</p></span>
    <span>멀티 속성 바인딩: <p v-bind="multiAttribute">멀티 속성 바인딩 2</p></span>
  </div>
  <!-- 사실상 v-bind 등 내에서 javascript 문법 지원함 -->
  <div>
    <span :id="generateId(multiAttribute.id)">ISOK? <span>{{ isOk ? "YES" : "NO" }}</span></span>
  </div>

  <div>
    <time :title="toTitleDate(date)" :datetime="date">
      {{ formatDate(date) }}
    </time>
  </div>

  <!-- 사용자 정의 디렉티브-->
  <div>
    <input type="text" id="myInput" placeholder="Click the button to focus here" />
    <button v-focus-on="'#myInput'">Focus the Input</button>
  </div>

  <!-- 빌트인(사전정의) 디렉티브 -->
  <div>
    <p v-text="msg"></p>
    <!-- 아래와 같음 -->
    <p>{{msg}}</p>
  </div>

  <!-- 컴포넌트 형식으로 vue 가져오기 -->
   <!-- componentText 값을 Test.vue로 던지기, 그러면 TestVue 에서 componentText를 넘긴 값으로 채움 -->
  <div>
    <TestVue componentText="Vue Component"></TestVue>
  </div>

  <div>
    <!-- 보이게 하고 숨기기만 -->
    <div>
      <h1>v-show Example</h1>
      <button @click="toggleVisibility">Toggle Visibility</button>
      <p v-show="isVisible">toggleVisibility 에 따라 보이게 하기</p>
    </div>
    <!-- 태그 자체를 생성, 삭제해버림 -->
    <div>
      <h1>v-if Example</h1>
      <button @click="toggleVisibility">Toggle Visibility</button>
      <p v-if="isVisible">This paragraph is conditionally visible.</p>
      <p v-else>
        This is Else
      </p>
    </div>
  </div>

  <!-- v-for -->
  <div>
    <div>
      <h1>v-for Example with Array</h1>
      <ul>
        <li v-for="(item, index) in items" :key="index">
          {{ index }}: {{ item.text }}
        </li>
      </ul>
    </div>

    <div>
      <h1>v-for Example with Object</h1>
      <ul>
        <li v-for="(value, key, index) in user" :key="key">
          {{ index }}: {{ key }} - {{ value }}
        </li>
      </ul>
    </div>

    <div>
      <h1>v-for Example with String</h1>
      <p>
        <span v-for="(char, index) in message" :key="index">
          <p> {{index}}:{{ char }} </p>
        </span>
      </p>
    </div>

    <!-- 더 있음 -->
  </div>

  
</template>

<script>
import TestVue from './components/Test.vue'

export default {
  components: {
    TestVue
  },
  name: 'HelloWorld',
  data() {
    return {
      msg: "View-Study",
      count: 0,
      msg: 'Hello Vue!',
      rawHtml: '<span style="color: red">빨간색 테스트</span>',
      testStyle: {
        color: 'blue',
        fontSize: '20px',
        border: '1px solid black'
      },
      isButtonDisabled: false,
      multiAttribute: {
        id: "multi-attribute",
        style: "color: green"
      },
      isOk: true,
      date: new Date().toISOString(),
      isVisible: false,
      items: [
        { text: 'Item 1' },
        { text: 'Item 2' },
        { text: 'Item 3' }
      ],
      user: {
        name: 'John Doe',
        age: 30,
        occupation: 'Developer'
      },
      message: 'Hello Vue!'
    }
  },
  methods:{
    generateId(id){
      return `test-${id}`
    },
    toTitleDate(date) {
      // title 속성에 사용할 날짜 형식을 반환
      // 예: "2023-07-11 14:00:00"
      const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' };
      return new Date(date).toLocaleDateString('en-US', options);
    },
    formatDate(date) {
      // time 요소의 텍스트 콘텐츠에 사용할 날짜 형식을 반환
      // 예: "July 11, 2023"
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      return new Date(date).toLocaleDateString('en-US', options);
    },
    toggleVisibility() {
      this.isVisible = !this.isVisible
    }
  }
}
</script>