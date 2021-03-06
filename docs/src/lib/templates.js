

var defaultVariants = ['success','warning','danger','info'];

function makeVariants(framework){
  return defaultVariants.map(variant => `${framework}_${variant}`);
}

export default{

  bulma: {
    template(){
      return `
        <transition
        :name="transitionName"
        :enter-active-class="transitionIn"
        :leave-active-class="transitionOut"
        >
          <div v-if="show"
          :class="cssClasses"
          >
            <button v-if="!important"
            class="delete"
            @click.stop.prevent="closeFlash"
            >
            </button>
            {{ message }}
          </div>
        </transition>`;
    },
    variants(){
      return makeVariants('bulma');
    },
    variantClass(){
      return function(){
        return `is-${this.variant.split('_')[1]}`;
      };
    }
  },

  uikit: {
    template(){
      return `
        <transition
        :name="transitionName"
        :enter-active-class="transitionIn"
        :leave-active-class="transitionOut"
        >

          <div v-if="show"
          :class="cssClasses"
          uk-alert
          >
            <button v-if="!important"
            class="uk-alert-close uk-close"
            @click.stop.prevent="closeFlash"
            >
            </button>

            {{ message }}

          </div>

        </transition>`;
    },
    variants(){
      return makeVariants('uikit');
    },
    variantClass(){
      return function(){
        return `uk-alert-${this.variant.split('_')[1]}`;
      };
    }
  },

  transition: {

    custom: `
      <transition name="fade">
        <div v-if="show"
        :class="cssClasses"
        >
          <button v-if="!important"
          class="close"
          @click.stop.prevent="closeFlash"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        {{ message }}
        </div>
      </transition>`,

    none: `
        <div v-if="show"
        :class="cssClasses"
        >
          <button v-if="!important"
          class="close"
          @click.stop.prevent="closeFlash"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        {{ message }}
        </div>`
  }

};