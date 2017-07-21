<template>
  <div id="app">
    <button v-on:click="greet" class="pure-button pure-button-primary">draw</button>
    <button v-on:click="reset" class="pure-button pure-button-primary">reset</button>

    <div class="pure-g">
      <div class="pure-u-md-3-5">
        <div id="bingo">
          <h2 id="aiko" v-if="name" class="animated">{{ name }}</h2>
          <transition
          name="custom-classes-transition"
          enter-active-class="animated tada"
          leave-active-class="animated bounceOutRight"
          >

          <img v-if="name" :src="image_url" :alt="name" />
          </transition>
        </div>
      </div>

      <div class="pure-u">
        <div id="history" v-if="draw_lists.length > 0">
          <h2>りれき</h2>
          <ul>
            <li v-for="name in draw_lists">
              {{ name }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Shuffle from 'shuffle-array'
import cards from './aiko.json'
export default {
  data () {
    return {
      name: '',
      cards: cards,
      image_url: '',
      shuffled_cards: [],
      draw_lists: [],
      msg: 'test'
    }
  },
  mounted: function() {
    this.$nextTick(function() {
      this.shuffled_cards = Shuffle(this.cards, { 'copy': true })
    })
  },
  methods: {
    greet: function() {
      console.log('click sareta')
      if (this.shuffled_cards.length === 0) {
        alert('end');
        return
      }

      const drawed_card = this.shuffled_cards.pop();
      console.log(drawed_card.name)
      this.name = '';
      setTimeout(() => {
        this.name = `${drawed_card.id}: ${drawed_card.name}`;
        this.image_url = drawed_card.image_url;
        this.draw_lists.push(this.name);
      }, 1000);
    },
    reset: function() {
      this.shuffled_cards = Shuffle(this.cards, { 'copy': true });
      this.name = '';
      this.image_url = '';
      this.draw_lists = [];
    }
  }
}
</script>

<style lang="scss">
h2 { letter-spacing: 0em; }
img { max-width: 400px }
</style>
