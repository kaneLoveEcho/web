import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Button from '@/components/Button'
import LinkButton from '@/components/LinkButton'
import Radio from '@/components/Radio'
import checkbox from '@/components/checkbox'
import input from '@/components/input'
import Inputnumber from '@/components/Inputnumber'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: HelloWorld
    },
    {
      path: '/button',
      name: 'Button',
      component: Button
    },
    {
      path: '/link-button',
      name: 'link-button',
      component: LinkButton
    },
    {
      path: '/radio',
      name: 'radio',
      component: Radio
    },
    {
      path: '/checkbox',
      name: 'checkbox',
      component: checkbox
    },
    {
      path: '/input',
      name: 'input',
      component: input
    },
    {
      path: '/inputnumber',
      name: 'inputnumber',
      component: Inputnumber
    }

  ]
})
