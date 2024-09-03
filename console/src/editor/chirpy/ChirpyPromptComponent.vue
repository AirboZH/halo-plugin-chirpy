<script setup lang="ts">
import { nodeViewProps, NodeViewWrapper } from "@halo-dev/richtext-editor";
const props = defineProps(nodeViewProps);

console.log("props", props)

</script>

<template>
  <node-view-wrapper
    class="chirpy-prompt-node-view"
    as="div"
    contenteditable="true"
  >
    <div class="chirpy-prompt-block" :class="{ 
      'prompt-tip': props.node.attrs.type === 'tip',
      'prompt-info': props.node.attrs.type === 'info',
      'prompt-warning': props.node.attrs.type === 'warning',
      'prompt-danger': props.node.attrs.type === 'danger',
     }">
      <span class="prompt-text">
        {{ props.node.textContent }}
      </span>
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

.chirpy-prompt-node-view{
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
}
</style>
