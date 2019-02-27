<template>
  <div class="about">
    <h1>Adicionar ganhadores</h1>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam libero inventore non, quaerat itaque mollitia eius reiciendis ratione ab saepe recusandae sed voluptatibus aliquid temporibus adipisci cumque neque sint vitae.
  </div>
</template>
<script>
import dados from '@/firebase/dados'
import db from '@/firebase/init'
  export default {
    data () { 
      return {
        list: dados,
        total: dados.length,
        current: 0
      }
    },
    mounted () { 
      this.addGanhador();

    },
    methods: {
      addGanhador () { 
        return false
        console.log(this.list[this.current], this.list[this.current].Nome)
        if(this.list[this.current]) {
          db.collection('listaGanhadores').add(this.list[this.current]).then(
            resp => {
                this.current = this.current + 1
                this.addGanhador();
            }
          )
        }
      
      }
    }
  }
</script>