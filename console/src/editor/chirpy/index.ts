import {
  mergeAttributes,
  Node,
  textblockTypeInputRule,
  wrappingInputRule,
  VueNodeViewRenderer
} from "@halo-dev/richtext-editor";
import ChirpyPromptComponent from "./ChirpyPromptComponent.vue";

export interface ChirpyPromptOptions {
  types: string[],
  HTMLAttributes: Record<string, any>,
}

declare module '@tiptap/core' {
  interface Commands<ReturnType> {
    prompt: {
      /**
       * Set a Prompt setType
       */
      setType: (attributes: { type: string }) => ReturnType,
    }
  }
}

export const ChirpyPrompt = Node.create<ChirpyPromptOptions>({
  name: "chirpyPrompt",

  addOptions() {
    return {
      types: ['tip', 'info', 'warning', 'danger'],
      HTMLAttributes: {},
    }
  },

  content: 'block+',

  group: 'block',

  defining: true,

  addAttributes() {
    return {
      type: {
        default: 'tip',
      }
    }
  },

  parseHTML() {
    return [
      {
        tag: 'chirpy-prompt',
      }
    ]
  },

  renderHTML({node, HTMLAttributes}) {
    const hasType = this.options.types.includes(node.attrs.type)
    const type = hasType ? node.attrs.type : this.options.types[0]
    return ['chirpy-prompt', mergeAttributes(HTMLAttributes, {class: `prompt-${type}`,}), 0]
  },
  
  addNodeView() {
    return VueNodeViewRenderer(ChirpyPromptComponent)
  },
  
  // addCommands() {
  //   return {
  //     setType: attributes => ({commands}) => {
  //       if (!this.options.types.includes(attributes.type)) {
  //         return false
  //       }
  //       return commands.setNode(this.name, attributes)
  //     },
  //   }
  // },

  addInputRules() {
    return this.options.types.map(type => {
      return wrappingInputRule({
        find: new RegExp(`^(:::|:::${type})\\s$`),
        type: this.type,
        getAttributes: {type},
      })
    })
  },
})
