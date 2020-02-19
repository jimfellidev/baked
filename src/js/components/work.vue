<template>
  <div id="flashcard-app" class="app">
<!-- {{msg}} -->
    <div class="a-head">
        <div class="a-head__layer">
        </div>
        <h1 class="a-head__title">Heather's Work</h1>
    </div>
    <div class="app__wrapper">
    <select class="app__select" v-on:change="filterList">
        <option>Select a type of treat...</option>
        <option v-for="item in uniqueItemsList">{{ item }}</option>
      </select>
      </div>


    <ul class="flashcard-list">
      <li 
      class="flashcard-list__li"
        v-for="card in cards"
        v-show="type === card.type"       
        v-on:click="toggleCard(card)"         
        >
        
          <transition name="flip">
              <div key="front" v-if="!card.flipped" class="card">
                <p class="card__front-content">{{card.front}}</p>
                

                  <div v-if="!card.flipped" class="card-image" 
                  v-bind:style="{ 'background-image': 'url(' + card.image + ')' }"
                  v-bind:src="card.image" > 
                  </div>
              </div>

            <div v-else class="card card__back" key="back">
              <p  class="card__back-content" > {{card.back}}</p>
            </div>
            
        </transition>
      </li>
    </ul>
  </div>
</template>

<script>


function frontImage(){
  
  const cardImage = document.getElementsByClassName('card-image');
    for (var i = 0; i < cardImage.length; i += 1) {
      cardImage[i].style.backgroundImage = cards.image;
    }
return frontImage();
}

export default {
  name: 'Work',
  // el: '#flashcard-app',
    props: ['msg'],
    data () {
    return {
      cards: [
        {
            front: 'Flower Power',
            back: 'Here is a collection of TINY flowers for later use on a baby shower cupcakes.  So cute!',
            flipped: false,
            type: 'Decorations',
            image: require('../../images/accessory-flowers.jpg'),
        },
        {
            front: 'Onesies and pins',
            back: 'From pins to onesies, these are more decorations to later be used on a female babyshower cake',
            flipped: false,
            type: 'Decorations',
            image: require('../../images/accessory-onesies.jpg'),
        },
        {
            front: 'Snowman',
            back: 'Uh oh, this poor fella may be melting!  Hopefully we get a chance to eat him first!',
            flipped: false,
            type: 'Decorations',
            image: require('../../images/accessory-snowman.jpg'),
        },
        {
            front: 'Baby Carriage',
            back: "I hope you got a gift receipt...  I don't think the baby is going to fit in that stroller...",
            flipped: false,
            type: 'Decorations',
            image: require('../../images/accessory-stroller.jpg'),
        },
        {
            front: 'Purple Rose',
            back: 'These elegant purple and white roses may be just the decoration to put your wedding cake over the top!',
            flipped: false,
            type: 'Decorations',
            image: require('../../images/accessory-weddingflowers.jpg'),
        },

        {
            front: 'Baby Shower Cupcakes',
            back: "It's hard for pictures to do any justice to how great these cupcakes came out!",
            flipped: false,
            type: 'Cupcakes',
            image: require('../../images/cupcake-flower.jpg'),
        },
        {
            front: 'Chocolate',
            back: 'CHOCOLATE!  What else can we say!?  These valentines cupcakes melted in the mouth!',
            flipped: false,
            type: 'Cupcakes',
            image: require('../../images/cupcake-choc.jpg'),
        },


        {
            front: 'Carmel Apple Delights',
            back: "If you've got a sweet tooth, nothing will hit the spot like these carmel apples!  They are everything you can imagine, with white chocolate on top!",
            flipped: false,
            type: 'Treats',
            image: require('../../images/treats-apple.jpg'),
        },
        {
            front: 'Ha, That Tickles',
            back: 'This Elmo cake pop deserves a lot of credit.  He will surely be eaten in just a moment, and yet maintains a smile despite his impending doom.',
            flipped: false,
            type: 'Treats',
            image: require('../../images/treats-elmo.jpg'),
        },
        {
            front: 'Hansel and Gretel',
            back: 'These delicious gingerbread houses would certainly be enough to lore me',
            flipped: false,
            type: 'Treats',
            image: require('../../images/treats-gingerbread.jpg'),
        },
        {
            front: 'Winter Society',
            back: 'Marshmellow snowmen and reindeer pops.  What can i say?  Now we are just showing off.',
            flipped: false,
            type: 'Treats',
            image: require('../../images/treats-holiday.jpg'),
        },
        {
            front: 'Bagged Chocolate Pretzels',
            back: "Great for the on the go treat.  Just as good for the hungry front-end web developer sitting in the office",
            flipped: false,
            type: 'Treats',
            image: require('../../images/treats-pretzels.jpg'),
        },
        {
            front: 'Chocolate Covered Pretzels',
            back: 'This display of Chocolate covered pretzels has chocolate drizzle on top to add to its style and taste!  wow, I love chocolate.',
            flipped: false,
            type: 'Treats',
            image: require('../../images/treats-pretzels2.jpg'),
        },
        {
            front: 'Snowman Zombies',
            back: 'CARRRRRL!!!!!!',
            flipped: false,
            type: 'Treats',
            image: require('../../images/treats-snowman.jpg'),
        },
        {
            front: 'Chocolate Covered Strawberries',
            back: 'They look too nice to eat.  If you do eat them, you are essentially stealing art from future generations.  Shame on you for even thinking it.',
            flipped: false,
            type: 'Treats',
            image: require('../../images/treats-strawberry.jpg'),
        },


        {
            front: 'Angry Beavers',
            back: 'Answer the phone, your childhood is calling',
            flipped: false,
            type: 'Cakes',
            image: require('../../images/cake-angrybeavers.jpg'),
        },
        {
            front: 'Football Mom',
            back: "This is just your run of the mill chocolate, strawberry, football, mother's day cake",
            flipped: false,
            type: 'Cakes',
            image: require('../../images/cake-anothamotha.jpg'),
        },
        {
            front: 'Under the Sea',
            back: 'This under water themed ice-cream cake came out swimmingly.',
            flipped: false,
            type: 'Cakes',
            image: require('../../images/cake-aqua.jpg'),
        },
        {
            front: 'Baby on Board',
            back: "This may be my personal favorite by our esteemed baker.  I saw the time and love she put into each decoration, and it was truly amazing.",
            flipped: false,
            type: 'Cakes',
            image: require('../../images/baby-on-board.jpg'),
        },
        {
            front: 'Happy B-day Jac!',
            back: 'Happy birthday Jacligza!  Ah, to be 22 again...',
            flipped: false,
            type: 'Cakes',
            image: require('../../images/cake-bdayjac.jpg'),
        },
        {
            front: "Happy B-day Dad!",
            back: "I think we'd all agree that a father is the single most important living being in the history of humanity.  *cough cough* I hope you're reading this son",
            flipped: false,
            type: 'Cakes',
            image: require('../../images/cake-birthday.jpg'),
        },
        {
            front: 'Patrick Shwasted',
            back:"You take the cake, I'll handle the rest.",
            flipped: false,
            type: 'Cakes',
            image: require('../../images/cake-booze.jpg'),
        },
        {
            front: 'Communion Cake',
            back: 'What a way to celebrate a special day!',
            flipped: false,
            type: 'Cakes',
            image: require('../../images/cake-communion.jpg'),
        },
        {
            front: 'Congratulations Cake',
            back: "What a charming graduation cake!  This is what we in the biz' refer to as a twofer",
            flipped: false,
            type: 'Cakes',
            image: require('../../images/cake-congrats.jpg'),
        },
        {
            front: 'We Miss You',
            back: ':(',
            flipped: false,
            type: 'Cakes',
            image: require('../../images/cake-doggycake.jpg'),
        },
        {
            front: 'That Tickles',
            back: "If you saw this cake when she was done with it, you'd be asking who the real monster was...  You deserved better icing Elmo...",
            flipped: false,
            type: 'Cakes',
            image: require('../../images/cake-elmo.jpg'),
        },
        {
            front: "Spring Time Mother's Day",
            back: "Look at those cute little lady bugs!  This cake just makes you feel the spring breeze!",
            flipped: false,
            type: 'Cakes',
            image: require('../../images/cake-mothers.jpg'),
        },
        {
            front: 'Chocolate Rain',
            back: 'Some grow strong, and others feel the pain.  Lucky for us, this chocolate raindrop icing cake most certainly grew strong!',
            flipped: false,
            type: 'Cakes',
            image: require('../../images/cake-raindrop.jpg'),
        },
        {
            front: 'Reptar',
            back: 'Reptar, Reptar, gotta find that Reptar!',
            flipped: false,
            type: 'Cakes',
            image: require('../../images/cake-rugrat.jpg'),
        },
        {
            front: 'Pretty Pretty',
            back: 'A very pretty formal styled cake!',
            flipped: false,
            type: 'Cakes',
            image: require('../../images/cake-seanmichelle.jpg'),
        },
        {
            front: 'Drizzle',
            back: 'A carmel drizzle over white icing gives a beautiful look on these ice-cream cakes!',
            flipped: false,
            type: 'Cakes',
            image: require('../../images/cake-squiggly.jpg'),
        },
        {
            front: 'Wedding Cake',
            back: "Started makin' cupcakes now we here.",
            flipped: false,
            type: 'Cakes',
            image: require('../../images/cake-weddingcake.jpg'),
        }
        ],
        type: '',
    }
  },
      methods: {
        filterList: function(){
            this.type = event.target.value;
            console.log(this.type);
        },
        toggleCard: function(card) {
            card.flipped = !card.flipped;
        }
    },
    computed: {
        uniqueItemsList: function(){
          const types = [];
          this.cards.forEach((item)=>{
            if(!types.includes(item.type)){
              types.push(item.type);
            }
          });
          return types;
        }
      }
}


















</script>










<style lang="scss" scoped>

.app__wrapper {
  margin-top: 30px;
  max-width: 1365px;
  margin: 30px auto 0px;

}
body {
  font-family: 'Montserrat', sans-serif;
  text-align: center;
  margin: 0;
}

.flashcard-list {
  padding-left: 0;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
      -ms-flex-flow: row wrap;
          flex-flow: row wrap;
  padding-top: 20px;
  margin: 0 auto;
  list-style-type: none;
}

@media only screen and (min-width: 690px) {
  .flashcard-list {
    width: 90%;
  }
}

.flashcard-list__li {
  padding: 10px 10px;
  -webkit-transition: all 0.3s ease;
  transition: all 0.3s ease;
}

.flashcard-list li {
  padding-bottom: 20px;
  margin: 0 auto;
}

.app {
  // max-width: 1365px;
  max-width:200000px;
  margin: 0 auto;
  padding-top: 0px;
}

.app__title {
  padding-top: 30px;
  padding-bottom: 15px;
}

.app__select {
  display: block;
  font-size: 16px;
  font-family: sans-serif;
  font-weight: 700;
  color: #444;
  line-height: 1.3;
  padding: .6em 1.4em .5em .8em;
  width: 60%;
  max-width: 300px;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  margin: 0;
  border: 1px solid #aaa;
  -webkit-box-shadow: 0 1px 0 1px rgba(0, 0, 0, 0.04);
          box-shadow: 0 1px 0 1px rgba(0, 0, 0, 0.04);
  border-radius: .5em;
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  background-color: #fff;
  background-image: url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23007CB2%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E"), -webkit-gradient(linear, left top, left bottom, from(#ffffff), to(#e5e5e5));
  background-image: url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23007CB2%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E"), linear-gradient(to bottom, #ffffff 0%, #e5e5e5 100%);
  background-repeat: no-repeat, repeat;
  background-position: right .7em top 50%, 0 0;
  background-size: .65em auto, 100%;
  margin: 0 auto;
}

.app__select::-ms-expand {
  display: none;
}

.app__select:hover {
  border-color: #888;
}

.app__select:focus {
  border-color: #aaa;
  -webkit-box-shadow: 0 0 1px 3px rgba(59, 153, 252, 0.7);
          box-shadow: 0 0 1px 3px rgba(59, 153, 252, 0.7);
  box-shadow: 0 0 0 3px -moz-mac-focusring;
  color: #222;
  outline: none;
}

.app__select option {
  font-weight: normal;
}

.app__select:disabled, .app__select .app__select [aria-disabled=true] {
  color: graytext;
  background-image: url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22graytext%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E"), -webkit-gradient(linear, left top, left bottom, from(#ffffff), to(#e5e5e5));
  background-image: url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22graytext%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E"), linear-gradient(to bottom, #ffffff 0%, #e5e5e5 100%);
}

.app__select:disabled:hover, .app__select .app__select [aria-disabled=true] {
  border-color: #aaa;
}

.card {
  display: block;
  height: 247px;
  width: 270px;
  background-size: cover;
  padding: 55px 15px 85px 15px;
  background-color: white;
  border-radius: 7px;
  margin: 5px;
  text-align: center;
  line-height: 27px;
  cursor: pointer;
  position: relative;
  color: #fff;
  font-weight: 600;
  font-size: 20px;
  -webkit-box-shadow: 0px 0px 22px 8px rgba(209, 193, 209, 0.5);
          box-shadow: 0px 0px 22px 8px rgba(209, 193, 209, 0.5);
  will-change: transform;
  background-size: cover;
  color: black;
  border-top: solid 4px pink;
}

.card__front-content {
  font-family: 'Dancing Script', cursive;
  margin-top: -18px;
  margin-bottom: 10px;
}

.card__back {
  border-top: solid 4px black;
  color: black;
}

.card__back-content {
  margin: 0 auto;
  padding-top: 60px;
  font-family: 'Gelasio', serif;
}

.card-image {
  margin: 0 auto;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  position: relative;
  width: 100%;
  height: 100%;
}

.card-image:hover {
  opacity: .9;
}

.flip-enter-active {
  -webkit-transition: all 0.4s ease;
  transition: all 0.4s ease;
}

.flip-leave-active {
  display: none;
}

.flip-enter, .flip-leave {
  -webkit-transform: rotateY(180deg);
          transform: rotateY(180deg);
  opacity: 0;
}

.flashcard-form {
  position: relative;
}

label {
  font-weight: 400;
  color: #333;
  margin-right: 10px;
}

input {
  border-radius: 5px;
  border: 2px solid #eaeaea;
  padding: 10px;
  outline: none;
}

button {
  border-radius: 5px;
  border: 1px solid #87cb84;
  background-color: #87cb84;
  padding: 8px 15px;
  outline: none;
  font-size: 14px;
  font-weight: 700;
  color: #fff;
  cursor: pointer;
  -webkit-transition: all 0.3s ease;
  transition: all 0.3s ease;
  float: right;
}

.error {
  margin-top: 10px;
  display: block;
  color: #e44e42;
  font-weight: 600;
}

*[dir="rtl"] .app__select, :root:lang(ar) .app__select, :root:lang(iw) .app__select {
  background-position: left .7em top 50%, 0 0;
  padding: .6em .8em .5em 1.4em;
}

.a-head {
  padding-top: 80px;
  height: 60vh;
  width: 100%;
  background-image: url("../../images/ahead-pic.jpg");
  background-repeat: none;
  background-color: #ee959e;
  background-position: center;
  background-size: cover;
  position: relative;
}

.a-head__title {
  margin: 0 auto;
  padding-top: 22vh;
  color: white;
  font-size: 30px;
  font-weight: bolder;
  position: relative;
  width: 80%;
  font-family: 'Playball', cursive;
}

@media only screen and (min-width: 422px) {
  .a-head__title {
    padding-top: 25vh;
  }
}

@media only screen and (min-width: 768px) {
  .a-head__title {
    font-size: 45px;
  }
}

.a-head__layer {
  background-color: #ee959e;
  background-color: #310031;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: .7;
}

</style>
