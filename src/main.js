import Vue from 'vue'
import App from './App.vue'
import Shuffle from 'shuffle-array'

let vm = new Vue({
  el: 'body',
  components: { App },
  data: {
    name: '',
    image_url: '',
    cards: [
      {
        "name": "高森藍子",
        "image_url": "http://125.6.169.35/idolmaster/image_sp/card/quest/25ea7fdd66fc6bd8e7209a4c0d2ba00c.png"
      },
      {
        "name": "高森藍子+",
        "image_url": "http://125.6.169.35/idolmaster/image_sp/card/quest/57bfd18f73cf672d05643716f74bbc48.png"
      },
      {
        "name": "[バレンタイン]高森藍子",
        "image_url": "http://125.6.169.35/idolmaster/image_sp/card/quest/8406433757bac86ef8134cd59ed4cd3b.png"
      },
      {
        "name": "[バレンタイン]高森藍子+",
        "image_url": "http://125.6.169.35/idolmaster/image_sp/card/quest/55f34023e9d773f97afde9bb99574843.png"
      },
      {
        "name": "[ふんわりガール]高森藍子",
        "image_url": "http://125.6.169.35/idolmaster/image_sp/card/quest/f70f143d7bb856a67cb7bbd175dc7829.png"
      },
      {
        "name": "[ふんわりガール]高森藍子+",
        "image_url": "http://125.6.169.35/idolmaster/image_sp/card/quest/d6dbb1e8e2c5e452026e993c5a8fde56.png"
      },
      {
        "name": "[アニバーサリーイエロー]高森藍子",
        "image_url": "http://125.6.169.35/idolmaster/image_sp/card/quest/d0289c681ff7668957a4d7a4198b61aa.png"
      },
      {
        "name": "[アニバーサリーイエロー]高森藍子+",
        "image_url": "http://125.6.169.35/idolmaster/image_sp/card/quest/a14b13704b20edf9834c27832fd1670f.png"
      },
      {
        "name": "[新春ガール]高森藍子",
        "image_url": "http://125.6.169.35/idolmaster/image_sp/card/quest/ca354dc7b9ffa3261b69dfbcb633c162.png"
      },
      {
        "name": "[新春ガール]高森藍子+",
        "image_url": "http://125.6.169.35/idolmaster/image_sp/card/quest/d3fa350883bd59a8245cef6a04319057.png"
      },
      {
        "name": "[ゆるふわ乙女]高森藍子",
        "image_url": "http://125.6.169.35/idolmaster/image_sp/card/quest/6efffe43696b87d64380769c40a3f12d.jpg"
      },
      {
        "name": "[ゆるふわ乙女]高森藍子+",
        "image_url": "http://125.6.169.35/idolmaster/image_sp/card/quest/0321c8e5bf54a3c4602ee87bac727750.jpg"
      },
      {
        "name": "[深緑の魔女]高森藍子",
        "image_url": "http://125.6.169.35/idolmaster/image_sp/card/quest/b9c843a22dc3445a53c384de9948be97.jpg"
      },
      {
        "name": "[深緑の魔女]高森藍子+",
        "image_url": "http://125.6.169.35/idolmaster/image_sp/card/quest/dab9960d2db1424d77af7ba448c77039.jpg"
      },
      {
        "name": "[CDデビュー]高森藍子",
        "image_url": "http://125.6.169.35/idolmaster/image_sp/card/quest/696e63ecba110164d3740efd5dab872a.jpg"
      },
      {
        "name": "[CDデビュー]高森藍子+",
        "image_url": "http://125.6.169.35/idolmaster/image_sp/card/quest/e3d9a2ea1b5c8caec4250f08f4f5cc95.jpg"
      },
      {
        "name": "[シンデレラドリーム]高森藍子",
        "image_url": "http://125.6.169.35/idolmaster/image_sp/card/quest/a6a1581237e6048bae08c63a85e50e87.jpg"
      },
      {
        "name": "[シンデレラドリーム]高森藍子+",
        "image_url": "http://125.6.169.35/idolmaster/image_sp/card/quest/77828bac52f87e72db028e70a0338c11.jpg"
      },
      {
        "name": "[おさんぽ日和]高森藍子",
        "image_url": "http://125.6.169.35/idolmaster/image_sp/card/quest/e82199f18a2886519aa98a1a5ef46043.jpg"
      },
      {
        "name": "[おさんぽ日和]高森藍子+",
        "image_url": "http://125.6.169.35/idolmaster/image_sp/card/quest/1a30af5fa8c952b1424a1dbb60269ff0.jpg"
      },
      {
        "name": "[まごころプレゼント]高森藍子",
        "image_url": "http://125.6.169.35/idolmaster/image_sp/card/quest/39c5e502a5ec2c962e1610098b6317cc.jpg"
      },
      {
        "name": "[まごころプレゼント]高森藍子+",
        "image_url": "http://125.6.169.35/idolmaster/image_sp/card/quest/0e80e42aa03acf28172a86a6113212e5.jpg"
      },
      {
        "name": "[放課後サマー]高森藍子",
        "image_url": "http://125.6.169.35/idolmaster/image_sp/card/quest/775f8939d540b7b1c169ba72be9ca25e.jpg"
      },
      {
        "name": "[放課後サマー]高森藍子+",
        "image_url": "http://125.6.169.35/idolmaster/image_sp/card/quest/c2f3cd2bd710cebb14c84f6a64d9949a.jpg"
      }
    ],
    shuffled_cards: [],
    draw_lists: []
  },
  attached: function() {
    this.shuffled_cards = Shuffle(this.cards, { 'copy': true })
  },
  methods: {
    greet: () => {
      if (vm.shuffled_cards.length === 0) {
        alert('end');
        return
      }

      const card = vm.shuffled_cards.pop();
      vm.name = card['name'];
      vm.image_url = card['image_url']; 
      vm.draw_lists.push(card['name']);
    },
    reset: () => {
      vm.shuffled_cards = Shuffle(vm.cards, { 'copy': true });
      vm.name = '';
      vm.image_url = '';
      vm.draw_lists = [];
    }
  }
})
