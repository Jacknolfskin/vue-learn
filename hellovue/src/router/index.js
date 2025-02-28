import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
// import FirstPage from '@/components/FirstPage'
// import SecondPage from '@/components/SecondPage'
// import HomePage from '@/components/HomePage'
// import FirstPart from '@/components/children/FirstPart'
import Abouts from '@/components/AppComponents/Abouts'
import WebSockets from '@/components/AppComponents/WebSockets'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/WebSocket',
      name: 'WebSocket',
      component: WebSockets
    },
    {
      path: '/abouts',
      name: 'abouts',
      component: Abouts
    }
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // },
    // {
    //   path: '/HomePage',
    //   name: 'HomePage',
    //   component: HomePage,
    //   children: [
    //     {
    //       path: '/',
    //       name: 'FirstPart',
    //       component: FirstPart
    //     }
    //   ]
    // },
    // {
    //   path: '/FirstPage',
    //   name: 'FirstPage',
    //   component: FirstPage
    // },
    // {
    //   path: '/SecondPage',
    //   name: 'SecondPage',
    //   component: SecondPage
    // }
  ]
})
