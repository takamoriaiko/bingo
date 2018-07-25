<template>
  <div id="app">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/pure/0.6.0/pure-min.css">
    <div class="buttons">
      <button v-on:click="draw" class="pure-button pure-button-primary draw" autofocus>draw</button>
      &nbsp;
      <button v-on:click="reset" class="pure-button">reset</button>
    </div>

    <div class="pure-g">
      <div class="pure-u-md-3-5">
        <div id="bingo">
          <h2 id="aiko" v-if="current_card.name" class="animated">{{ current_card.id }}: {{ current_card.name }}</h2>
          <transition
            name="custom-classes-transition"
            enter-active-class="animated tada"
            leave-active-class="animated bounceOutRight"
          >
            <figure class="card">
              <img v-if="current_card.name" :src="current_card.image_url" :alt="current_card.name" />
            </figure>
          </transition>
        </div>
      </div>

      <div class="pure-u">
        <div id="history" v-if="draw_lists.length > 0">
          <h2>りれき</h2>
          <ul>
            <li v-for="card in draw_lists" v-bind:key="card.id">
              {{ card.id }}: {{ card.name }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Shuffle from "shuffle-array";
import cards from "../assets/aiko.json";

export default {
  name: "Aiko",
  data: function() {
    return {
      current_card: {},
      cards: cards,
      shuffled_cards: [],
      draw_lists: []
    };
  },
  props: {
    msg: String
  },
  mounted: function() {
    this.$nextTick(function() {
      this.shuffled_cards = Shuffle(this.cards, { copy: true });
    });
  },
  methods: {
    draw: function() {
      if (this.shuffled_cards.length === 0) {
        alert("end");
        return;
      }

      const card = this.shuffled_cards.pop();
      this.current_card = card;
      this.draw_lists.push(card);
    },
    reset: function() {
      if (!confirm("ほんとうに？")) return;
      this.shuffled_cards = Shuffle(this.cards, { copy: true });
      this.current_card = {};
      this.draw_lists = [];
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
li {
  margin: 0 10px;
  text-align: left;
}
a {
  color: #42b983;
}
body {
  background-color: #eef5d3;
}
#aiko {
  width: 480px;
}
.pure-g {
  letter-spacing: 0;
}
/* ボタンをでかく */
.buttons {
  margin: 1em;
}
button {
  font-size: 2em;
}
.draw {
  width: 50vw;
}
/* デレステの絵を真ん中だけ表示 */
.card {
  max-width: 480px;
  height: 480px;
  overflow: hidden;
  position: relative;
  margin: 0;
}
.card img {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  max-height: 480px;
}
</style>
