<script setup lang="ts">
import { nodeViewProps, NodeViewWrapper } from "@halo-dev/richtext-editor";
const props = defineProps(nodeViewProps);

const updateInput = (e: any) => {
  props.updateAttributes({ content: e.target.value });
};
</script>

<template>
  <node-view-wrapper
    class="chirpy-prompt-node-view"
    as="div"
    contenteditable="false"
  >
    <div class="chirpy-prompt-block" :class="{ 
      'prompt-tip': props.node.attrs.type === 'tip',
      'prompt-info': props.node.attrs.type === 'info',
      'prompt-warning': props.node.attrs.type === 'warning',
      'prompt-danger': props.node.attrs.type === 'danger',
     }">
      <input class="prompt-text" type="text" :value="props.node.attrs.content" @input="updateInput">
    </div>
  </node-view-wrapper>
</template>

<style scoped>
.prompt-tip {
  background-color: rgb(123, 247, 144, 0.2);
}

.prompt-info {
  background-color: #e1f5fe;
}

.prompt-warning {
  background-color: rgb(255, 243, 205);
}

.prompt-danger {
  background-color: rgb(248, 215, 218, 0.56);
}

.chirpy-prompt-node-view {
  margin: .75em 10px 10px;
}

.chirpy-prompt-block {
  width: 90%;
  padding: 15px 10px;
  border-radius: 5px;
  color: rgb(46, 46, 46, 0.77);
}

.prompt-text {
  margin: 5px 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
  width: calc(100% - 30px);
  box-sizing: border-box;
}
</style>
