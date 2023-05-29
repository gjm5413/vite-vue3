// import Cookies from 'js-cookie'
import { useRoute } from 'vue-router'
import router from '@/router'

const useTagsStore = defineStore(
  'tagsView',
  () => {
    const data = reactive<any>({
      cacheViews: [],
    })
    const active = ref('')

    // 单个删除
    function singleTagsClose(i) {
      data.cacheViews.splice(i, 1)
    }

    const route = useRoute()

    watch(() => route, (to, from) => {
      active.value = to.path
      if (to.path !== '/' && !(data.cacheViews.some((i) => to.path === i.path))) { //
        data.cacheViews.push({ ...to })
      }
    },
    {
      immediate: true,
      deep: true,
    })
    watch(() => data.cacheViews, (to, from) => {
      const length = to.length
      if (to.length === 0) { //
        router.push('/')
      }
      else { //
        router.push(to[length - 1].path)
      }
    },
    {
      immediate: true,
      deep: true,
    })

    return {
      data,
      singleTagsClose,
      active,
    }
  },
)

export default useTagsStore
