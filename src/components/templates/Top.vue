<template>
  <div>
    <b-card
      title="自己紹介"
      tag="article"
      class="mb-12"
    >
      <b-card-text>
        2016年4月:筑波大学情報メディア創成学類入学<br>
        2020年3月:卒業<br>
        2020年4月筑波大学院情報工学研究群情報理工学位プログラム入学<br>
        2022年3月卒業予定<br>
        コンピュータネットワーク研究室所属<br>
      </b-card-text>
    </b-card>
    <b-card
      title="プログラミング言語"
      tag="article"
      class="mb-12"
    >
      <b-card-text>
        C++,C#,javascript
      </b-card-text>
    </b-card>
    <b-card
      title="social"
      tag="article"
      class="mb-12"
    >
      <b-card-text>
        <b-button href="https://github.com/rikutkb" variant="primary">GITHUB</b-button>
        <b-button href="https://atcoder.jp/users/iwasaki_tkb?lang=ja" variant="primary">Atcoder</b-button>
      </b-card-text>
    </b-card>
  </div>
</template>
<script>
export default {
  name: 'Top',
  props: {
    msg: String
  },
  components: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
</style>
