<template>
  <div class="card" :span="6">
    <el-card class>
      <div slot="header" class="clearfix">
        <span>{{ atas.name }}</span>
      </div>
      <el-row>
        <el-col :span="1"><p></p></el-col>
        <el-col :span="22">
          <div class="grid-content bg-purple-dark">
            <el-card id="insideCard" class="box-card" v-for="theJob in atas.data" :key="theJob">
              <div class="text item">{{ theJob }}</div>
              <div class="tombol">
                <el-button class="tombolkecil" size="mini" type="success" icon="el-icon-delete" circle></el-button>
                <el-button class="tombolkecil" size="mini" type="success" icon="el-icon-delete" circle></el-button>
                <el-button class="tombolkecil"
                  size="mini"
                  type="danger"
                  icon="el-icon-delete"
                  circle
                  @click="removeTask"
                ></el-button>
              </div>
            </el-card>
          </div>
        </el-col>
        <el-col :span="1"><p></p></el-col>
      </el-row>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "card",
  props: ["atas"],
  data() {
    return {};
  },
  methods: {
    removeTask() {
      console.log("akan dihapus");
      console.log(this.atas);
      // this.$emit('')
    },
    toPreLog() {},
    toToDo() {},
    toOngoin() {},
    toDone() {}
  },
  mounted: {
    makeAtitle(value) {
      this.title = value;
    }
  }
};
</script>

<style>
.text {
  font-size: 25px;
}

.tombol{
  display: flex;
  justify-content: center;
}
.tombolkecil{
  justify-content: center;
}
#insideCard {
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 10px;
  background-image: linear-gradient(125deg, #19b59d, #50d5ca, #19b59d);
}
.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}

.box-card {
  width: 210px important;
}
</style>
