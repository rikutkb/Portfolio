<template>
  <div>
    <div id="works">
      <b-card
        title="習慣継続アプリ"
        tag="article"
        class="mb-12"
      >
        <b-card-text>
          続けたい習慣の分析を自分で行い、習慣づけさせるためのアプリです。

        </b-card-text>

        <b-button href="https://continue-habbit.herokuapp.com/" variant="dark">習慣アプリ</b-button>
      </b-card>
      <b-card
        title="PDCAアプリ"
        img-alt="Image"
        img-top
        tag="article"
        class="mb-12"
      >
        <b-card-text>
          達成したい目標の分析とPDCAサイクルのサポートを行うことによって目標の達成を手伝います。<br>
          説明:<br>
          バックエンドはnodeを使用してRESTAPIを作成。
          フロントエンドはVueを使用して作成<br>
          制作期間:二ヶ月<br>
          個人制作<br>

        </b-card-text>

        <b-button href="https://pdcaapp.herokuapp.com/" variant="dark">PDCAアプリ</b-button>
      </b-card>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Works',
  props: {
    msg: String
  },
  data () {
    return {
      PDCAIMG: require('../../assets/PDCA.png')
    }
  },
  components: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
