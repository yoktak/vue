<script setup>
import HelloWorld from './components/HelloWorld.vue'
// イベント
import { ref } from "vue";
const time = ref(null);
const onClick = () => {
  time.value = new Date().toTimeString();
}
// フォーム入力
const myLastName = ref(null);
// 条件付レンダリング
const language = ref(null);
// データバインディング
const link = "https://v3.ja.vuejs.org/";
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="HelloWorld!" />
    </div>
  </header>
  <main>
      <!--イベント-->
      <div>Vue3 基礎編</div>
      <button v-on:click="onClick">現在の時間を取得します</button>
      <p>{{ time }}</p>
      <!--フォーム入力-->
      <form>
        <div for="name">名前を入力してください</div>
        <input type="text" id="name" v-model= "myLastName" />
      </form>
      <div>私の名前は、{{ myLastName }} です。</div>
      <!--条件付レンダリング-->
      <form>
        <select id ="language" v-model= "language">
          <option value="">好きなプログラミング言語を選んでください。</option>
          <option value="php">PHP</option>
          <option value="ruby">Ruby</option>
          <option value="python">Python</option>
          <option value="java">Java</option>
        </select>
      </form>
      <div v-if="language==='php'">Web系でよく使用されている</div>
      <div v-else-if="language==='ruby'">日本発のプログラミング言語</div>
      <div v-else-if="language==='python'">機械学習で使用されることが多い</div>
      <div v-else-if="language==='java'">大規模開発で用いられることが多い言語</div>
      <div v-else>プログラミング言語が選択されていません。</div>
      <!--データバインディング-->
      <p>Vue3公式サイトは<a v-bind:href="link">こちら</a></p>
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
