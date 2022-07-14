import { withPluginApi } from "discourse/lib/plugin-api";
import EmberObject, { action } from "@ember/object";
import { isEmpty } from "@ember/utils";

export default {
  name: "blog-customization",

  initialize() {
    withPluginApi("0.8", (api) => {
        /**
        ** Override Masonry Layout, To have 25px spacing between topic boxes on the Blog category page [Added by: Saurabh; Date: 12-07-2022]
        **/
        if (!CSS.supports("grid-template-rows", "masonry")) {
            const path = window.location.pathname;
            if(/^\/c\/knowledge-base\/blog\//.test(path)){
                api.modifyClass("component:topic-list", {
                    masonryGridSpacingPixels: 25
                });
            } 
                
        }
    });
  },
};
