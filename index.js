module.exports = {
  component: {
    install: (Vue, opts = { pre: 'Dt' }) => {
      const { pre } = opts
      const requireComponent = require.context('@/components', true, /\.vue$/)
      requireComponent.keys().forEach(key => {
        const componentName = pre + /^\S+\/(\w+).vue$/.exec(key)[1]
        const comConfig = requireComponent(key)
        Vue.component(componentName, comConfig.default || comConfig)
      })
    }
  },
  filter: {
    install: (Vue, opts) => {
      const filters = opts.filters || {}
      const pre = opts.pre || ''
      Object.entries(filters).forEach(([k, v]) => {
        Vue.filter(pre + k, v)
      })
    }
  }
}
