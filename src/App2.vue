<script >
import { onMounted } from 'vue';

// import { ref } from 'vue'
export default {
  // option api
data(){
  return {
    firstName:"",
    status:false,
    tasks:["a","b","c"],
    link :"ahihi.com",
    name: "", // input nhập task,
    show:true,
    newTask:"",
  }
},
computed: {
  fullName() {
    return this.firstName + ' ' + this.name;
  }
},



methods:{
  toogleStatus(){
    this.status = !this.status;
    console.log(this.status);
  },
  addTask(){
    console.log("add")
    this.tasks.push(this.name);
  },
  deleteTask(index){
    console.log(index);
    this.tasks.splice(index,1);
  },
  bonusTag(){
  console.log("add")
    this.tasks.push(this.name);
    this.name =''
  },
  toggleShow(){
    this.show =!this.show;
  },
},
// ngoài method 
async mounted(){
try{
  const response = await fetch('https://jsonplaceholder.typicode.com/todos');
  const data = await response.json();
  console.log(data);
  this.tasks  = data.map((task)=>task.title);
}catch(error){
  console.log(error)
  }
}
}

//// composition ref  : trong hàm truy cập thì có giá trị

// const name = ref("john Doe");
// const status = ref(false);
// const tasks = ref(["a", "b", "c"]);
// const link = ref("ahihi.com");
// const count = ref(0);

// function toggleStatus() {
//   status.value = !status.value;
//   console.log(status.value);
// }

// function increment() {
//   count.value++;
// }



</script>

<template>
  <div class="">
     <h1 class="text-3xl font-bold text-blue-600">
      Hello Tailwind 🚀
    </h1>
    <h1 v-if="fullName !== undefined">{{ fullName }}</h1>

    <button v-show="show" @click="toggleShow">Sáng Tối</button>
  </div>
  <p v-if="status">{{ status }} </p>
  <p v-else-if="status =='pending'"> User is Inactive</p>

  <p v-else> User is Inactive</p>
  <ul>
    <li v-for ="(task ,index) in tasks">{{ task }}
    <button @click="deleteTask(index)">x</button>  
    <br>
    </li>
  </ul>
  <!-- v-bind -->
  <a v-bind:href="link">Link google </a>
  <a :href="link">aaaa</a>
  <button v-on:click="toogleStatus">Change Status</button>
  <button @click="toogleStatus">Change status</button>


  
<img src="https://anhnail.com/wp-content/uploads/2024/11/Hinh-gai-xinh-2k4-mac-vay.jpgk" alt="ảnh gái xinh">

<!--  -->
  <form  @submit.prevent="bonusTag">
    <label for="newTask">
      addTag
    </label>
    <input type="text" id="newTask" name="newTask" v-model="name">
    <input type="text" name="firstName" id="" v-model="firstName">
    <button type="submit">Submit</button>
  </form>
  <!-- ẩn hiện = nút bấm -->
    <button @click="toggleShow">Ẩn / hiện</button>
</template>

<style scoped>
</style>




<!-- @submit = v-on:submit -->
 <!-- .prevent = event.preventDefault() -->
  <!-- directive : thêm hành vi đặc biệt vào thẻ html  : v-model, v-if, v-for, v-bind->
   <!--   Dữ liệu hiển thị = cú pháp {{}}-->


   <!-- 2 way binding  with v-model  : ràng buộc 2 chiều với v-model -->
    <!-- gõ input -> value trong v-model thay đổi -> inpurt cũng thay đổi   -->


    <!-- Một số directive phổ biến khác

v-if="condition" → render HTML nếu điều kiện đúng.

v-show="condition" → ẩn/hiện HTML bằng CSS (display: none).
//v-show sẽ luôn render phần tử vào DOM, nhưng ẩn/hiện bằng CSS (display: none)


v-bind:attr="value" (hoặc :attr="value") → bind attribute động.
// v-bind:ahref="link"
// :src='imageUrl'

v-on:event="method" (hoặc @event="method") → lắng nghe sự kiện. -->

<!-- 1. Computed Properties (thuộc tính tính toán) -->
