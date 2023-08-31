import { definePlugin } from "@halo-dev/console-shared";
import {ChirpyPrompt} from "@/editor/chirpy";

export default definePlugin({
  extensionPoints: {
    "default:editor:extension:create": () => {
      return [ChirpyPrompt]
    }
  },
});
