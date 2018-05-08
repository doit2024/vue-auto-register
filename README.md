# vue-auto-register

## install

```
$ npm i -S vue-auto-register
```

## start

### component

```js
import Vue from 'vue'
import { component } from 'vue-auto-register'

// @/componsts/**/Map.vue => <DtMap/>
Vue.use(component)

// @/componsts/**/Map.vue => <MyMap/>
Vue.use(component. {
  pre: 'My'
})

```

### filter

```js
import Vue from 'vue'
import { filter } from 'vue-auto-register'
import * as filters from '@/path/to/filters'

// @fun f1 => {{ msg | f1 }}
Vue.use(filter. {
  filters
})

// @fun f1 => {{ msg | f_f1 }}
Vue.use(filter. {
  filters,
  pre: 'f_'
})

```

> @/path/to/filters.js

```
export const ft1 = v => 1
export const ft2 = v => 2
```
