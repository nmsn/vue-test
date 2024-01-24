<template>
  <div>
    <h3 class="h3">ChromeDevtools</h3>
    <div class="nav">
      <Row>
        <button @click="onChange">debugger</button>
        <input v-model="input" />
      </Row>
      <Row>
        <button @click="onThrow">throw</button>
      </Row>
      <Row>
        <button @click="onConditionChange">condition</button>
      </Row>
      <Row>
        <button @click="onReq">onReq</button>
        <span class="res">{{ res }}</span>
      </Row>
      <Row>
        <button @click="onSubTreeChange">子树修改</button>
        <div ref="domRef">
          <span ref="domChildRef">子节点文本</span>
        </div>
      </Row>

      <Row>
        <button @click="onDomAttrChange">属性修改</button>
        <div ref="domAttrRef">属性修改</div>
      </Row>
      <Row>
        <button @click="onDomDelChange">删除节点</button>
        <div ref="domDelRef">
          <span ref="domDelChildRef">子节点文本</span>
        </div>
      </Row>

      <Row>
        <button @click="onResponsiveChange">响应式修改</button>
        <div :style="`color:${isResponsiveShow ? 'red' : 'blue'};`">
          响应式修改
        </div>
      </Row>
    </div>
  </div>
</template>

<script>
// import { add, double } from "../utils/index";
import Row from "./Row";
import axios from "axios";

const add = (num, num2 = 1) => {
  return num + num2;
};

const double = (num) => {
  return num * 2;
};

export default {
  name: "ChromeDevtoolsPage",
  components: {
    Row,
  },
  data() {
    return {
      input: 0,
      isDomShow: false,
      isResponsiveShow: false,
      res: "",
    };
  },
  methods: {
    // 断点各个功能
    onChange() {
      const a = 2;
      const num1 = add(this.input, a);
      const newVal = double(num1);
      // debugger;
      this.input = newVal;
    },
    // 条件断点
    onConditionChange() {
      const len = 5;
      for (let i = 0; i < len; i++) {
        // 设置条件
        console.log(i);
      }
    },
    // TODO 未捕获的查看 html
    onThrow() {
      const x = undefined;
      x.x = 1;
    },
    // 接口断点，在接口发送前暂停
    async onReq() {
      const { data } = await axios.get(
        "https://api.uomg.com/api/comments.163?format=text",
      );
      this.res = data;
    },
    // dom
    // 所有子节点
    onSubTreeChange() {
      this.$refs.domChildRef.innerHTML = "子节点文本-修改后";
    },
    // 节点属性修改
    onDomAttrChange() {
      this.isDomShow = !this.isDomShow;
      this.$refs.domAttrRef.style.color = this.isDomShow ? "red" : "blue";
    },
    // 针对元素本身删除
    onDomDelChange() {
      if (this.$refs.domDelRef && this.$refs.domDelChildRef) {
        this.$refs.domDelRef.removeChild(this.$refs.domDelChildRef);
        this.$refs.domDelChildRef = null;
      }
    },
    // 不会触发节点的断点
    onResponsiveChange() {
      this.isResponsiveShow = !this.isResponsiveShow;
    },
  },
};
</script>

<style scoped>
.nav {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}

.res {
  max-width: 600px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
