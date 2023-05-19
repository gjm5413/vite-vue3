// const watcher:ClassDecorator = (target:Function) => {
//   target.prototype.getName = <T>(name:T):T => {
//     return name;
//   };
// };
// @watcher
// class A {

// }

import { computed, reactive, ref } from 'vue'

export function useDecorator() {
  const arr = reactive({})

  const refName = ref('')
  const refAge = ref('')
  const newname = computed(() => {
    return `${refName.value}---${refAge.value}`
  })
  return {
    refName,
    refAge,
    newname,
  }
}
