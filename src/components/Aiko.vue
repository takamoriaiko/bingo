<template>
  <div id="app">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/pure/0.6.0/pure-min.css">
    <button v-on:click="draw" class="pure-button pure-button-primary">draw</button>
    <button v-on:click="reset" class="pure-button pure-button-primary">reset</button>

    <div class="pure-g">
      <div class="pure-u-md-3-5">
        <div id="bingo">
          <h2 id="aiko" v-if="current_card.name" class="animated">{{ current_card.id }}: {{ current_card.name }}</h2>
          <transition
          name="custom-classes-transition"
          enter-active-class="animated tada"
          leave-active-class="animated bounceOutRight"
          >

          <img v-if="current_card.name" :src="current_card.image_url" :alt="current_card.name" />
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
      this.shuffled_cards = Shuffle(this.cards, { copy: true });
      this.name = "";
      this.image_url = "";
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
</style>
