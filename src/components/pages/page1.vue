<template>
  <div>
    <div class="add">
      <input type="number" v-model="obj.id">
      <input type="text" v-model="obj.name">
      <input type="text" v-model="obj.content">
      <button @click="addList">添加</button>
      <button @click="updateList">修改</button>
    </div>
    <ul>
      <li v-for="item in list">{{item.id}}:{{item.name}}:{{item.content}}--------
        <button @click="deleteList(item.id)">删除</button>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
import Mock from '@/mock/index'

export default {
  data() {
    return {
      list: [],
      obj: {
        //将添加的数据存到obj对象中
        id: 0,
        name: "",
        content: ""
      }
    };
  },
  created() {
    this.getData();
  },
  methods: {
    // 查询列表数据
    getData() {
      axios.get("/list").then(res => {
        this.list = res.data.data;
        console.log(res)
      });
    },

    // 删除列表数据
    deleteList(id) {
      axios
          .post("/list", {
            params: {
              id: id
            }
          })
          .then(res => {
            this.list = res.data.data;
          });
    },

    // 增加列表数据
    addList() {
      // console.log("****"+this.obj);
      axios
          .post("/listAdd", {
            params: {
              obj: this.obj
            }
          })
          .then(res => {
            console.log("请求成功"+res);
            this.list = res.data.data;
          });
    },

    // 修改列表数据
    updateList() {
      var that = this;
      // console.log(this.obj)
      axios
          .post("/listUpdate", {
            params: {
              obj: this.obj
            }
          })
          .then(function (res) {
            // console.log("请求的数据"+res.data.data);
            that.list = res.data.data;
          });
    }
  }
};

</script>

<style>
* {
  padding: 0;
  margin: 0;
}

li {
  list-style: none;
  padding: 10px;
  border: 1px solid rgba(0, 0, 0, 0.2);
}

</style>
