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
        tag="article"
        class="mb-12"
      >
        <b-card-body>
          <img src="../../assets/PDCA.png" width="300">
          <b-card-text>
            達成したい目標の分析とPDCAサイクルのサポートを行うことによって目標の達成を手伝います。<br>
            説明:<br>
            バックエンドはnodeを使用してRESTAPIを作成。<b-button href="https://github.com/rikutkb/PDCA_app" variant="dark">ソースコード</b-button><br>

            フロントエンドはVueを使用して作成<b-button href="https://github.com/rikutkb/PDCAFront" variant="dark">ソースコード</b-button><br>
            制作期間:二ヶ月<br>
            個人制作<br>

          </b-card-text>
        </b-card-body>

        <br>
        <br>

        <iframe width="560" height="315" src="https://www.youtube.com/embed/uCBmDeAGe44" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

      </b-card>
      <b-card
        title="Theatalk(チャットアプリ)(チーム開発)"
        tag="article"
        class="mb-12"
      >
        <b-card-text>
          共通の趣味をもった知らない人同志で一緒にチャットができるアプリです.<br>
            説明:
            バックエンドはrailsAPIを使用してRESTAPIを作成。
            iosアプリは開発中<br>
            制作期間:3か月<br>
            チーム開発(バックエンドとiosアプリ開発担当)<br>

            ソースコード(backend):<b-button href="https://github.com/WhiteTshirts/theatalk_backend" variant="primary">バックエンド</b-button><br>
            ソースコード(ios):<b-button href="https://github.com/WhiteTshirts/theatalk_ios" variant="success">ios</b-button>

        </b-card-text>
        <br>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/dxB64xdkbvs" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </b-card>

      <b-card
        title="夢日記アプリ"
        tag="article"
        class="mb-12"
      >
        <img src="../../assets/dream1.png" width="600">

        <b-card-text>
          夢日記に対して場所や人物のタグをつけることによって、逆引きで夢を検索ができるアプリです。
          ソースコード:<b-button href="https://github.com/rikutkb/dairy_dream" variant="primary">github</b-button><br>

        </b-card-text>

        <b-button href="http://www.theatalk.work:3300/dream_app" variant="dark">夢日記</b-button>

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
