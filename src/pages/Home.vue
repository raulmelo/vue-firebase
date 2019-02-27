<template>
  <div>
    <h1>Pagina 1</h1>
  </div>
</template>

<script>
import db from '@/firebase/init'
import dados from '@/firebase/dados'
export default {
  name: 'home',
  data () { 
    return {

    }
  }, 
  created () { 
    var inlet = db.collection("listaGanhadores").where("Nome", "==", "ANANDA GUADAGNIN")
    inlet.get().then(snapshot => {
      snapshot.forEach(doc => {
          console.log(doc.data(), doc.id)
        });
    })
  console.log(inlet)

    return false
    db.collection('listaGanhadores').get().then( snapshot => { 
        snapshot.forEach(doc => {
          console.log(doc.data(), doc.id)
        });
    } )
  }
}
</script>
