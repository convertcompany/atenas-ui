Vue.component("v-at-field", {
    template : /*html*/`
        <div class="at-field" :at-status="status">
            <template v-if="type != 'checkbox' && type != 'radio'">
                <p>{{ description }}</p>
                <template v-if="type != 'select' && type != 'textarea'">
                    <input :type="type" v-model="inputVal" :placeholder="placeholder" :name="name">
                </template>
                <template v-else-if="type == 'select'">
                    <select v-model="inputVal">
                        <option v-for="option in options" :value="option.value">{{ option.label }}</option>
                    </select>
                </template>
                <template v-else-if="type == 'textarea'">
                    <textarea v-model="inputVal" :placeholder="placeholder" :name="name"></textarea>
                </template>
                <label><i :class="labelIcon" v-if="labelIcon"></i> {{ label }}</label>
            </template>
            <template v-else>
                <label><input :type="type" v-model="inputVal" :name="name"/> <i :class="labelIcon" v-if="labelIcon"></i> {{ label }}<p>{{ description }}</p></label>
            </template>
        </div>
    `,
    props : ["label", "labelIcon", "type", "options", "value", "placeholder", "description", "status", "name", "keyEnter"],
    computed: {
        inputVal: {
          get() {
            return this.value;
          },
          set(val) {
            this.$emit('input', val);
          }
        }
    }
});

Vue.component("v-at-button", {
    template : /*html*/`
        <button class="at-button" :at-loading="atLoading">
            <i :class="labelIcon" v-if="labelIcon"></i>
            {{ label }}
        </button>
    `,
    props : ["label", "labelIcon", "description", "status", "name" , "atLoading"],
});