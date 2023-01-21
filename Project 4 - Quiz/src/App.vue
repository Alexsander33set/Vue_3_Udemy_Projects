<template>
  <ScoreBoard :playerPoints="this.playerPoints" :computerPoints="this.computerPoints" />
  <section class="questionContainer">
    <h2 class="question" v-html="question"></h2>
    <div style="display: flex;flex-direction:column;">
      <div class="answer" :class="this.questionSubmited ? 'disabled' : ''" v-for="(answer, index) in this.allAnswers" v-bind:key="answer">
        <input type="radio" :value="answer" :id="'option' + index" :disabled="questionSubmited" v-model="this.answerSelected">
        <label :for="'option' + index ">{{answer}}</label>
      </div>
    </div>
      <button v-if="this.questionSubmited" class="submitBtn" @click="apiNewRequest()">Próxima Questão</button>
      <button v-else class="submitBtn" @click="questionnSubmited()">Enviar</button>

  </section>
</template>

<script>
  import ScoreBoard from './components/ScoreBoard.vue';
export default {
  name: 'App',
  data(){
    return{
      playerPoints:0,
      computerPoints:0,
      question:undefined,
      correctAnswer:undefined,
      incorrectAnswer:undefined,
      answerSelected:undefined,
      questionSubmited:false,
    }
  },
  components:{
    ScoreBoard
  },
  created(){
    this.apiRequest()
  },
  computed:{
    allAnswers(){
      var allAnswers = JSON.parse(JSON.stringify(this.incorrectAnswer))
       allAnswers.splice(Math.round(Math.random() * allAnswers.length), 0,this.correctAnswer)
      return allAnswers
    },
  },
  methods: {
    apiRequest(){
      this.axios.get('https://opentdb.com/api.php?amount=1&category=18&difficulty=easy').then((response) => {
      this.question = response.data.results[0].question
      this.incorrectAnswer = response.data.results[0].incorrect_answers
      this.correctAnswer = response.data.results[0].correct_answer
      })
    },
    apiNewRequest(){
      this.questionSubmited=false
      this.apiRequest()
    },
    questionnSubmited(){
      if (!this.answerSelected){
        alert('responde antes irmão')
      }  
      else{
        this.questionSubmited = true
        if (this.answerSelected == this.correctAnswer){this.playerPoints ++}else{this.computerPoints++}
      }
      this.answerSelected = undefined
    }
  },
}

</script>

<style lang="scss">
#app {
  font-family:Roboto, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

/*questions Container*/
.questionContainer{display: flex;flex-direction:column;align-items:center;}
.questionContainer .question{font-size: 1.5rem;}
.questionContainer .answer{text-align: left;font-size: 1.125rem;}
.questionContainer :is(input[type="radio"], label){cursor: pointer;}
.questionContainer .answer.disabled{color:rgb(170, 170, 170);}
.submitBtn{margin-top:12px;padding: 5px 8px;border: none; box-shadow: 0 0 2px gray;background: rgb(141, 158, 255);border-radius: 3px;cursor: pointer;}
</style>