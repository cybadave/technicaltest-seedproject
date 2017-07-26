import Vue from 'vue'
import { beforeEachHooks, afterEachHooks, shallow } from 'vue-unit'

import MyComponent from './app-component.vue'
import 'isomorphic-fetch'
var fetchMock = require('fetch-mock');


describe('App-Component', () => {
  beforeEach(beforeEachHooks)
  afterEach(afterEachHooks)
  afterAll(() => {
    fetchMock.restore();
  });

  beforeAll(() => {
    fetchMock.get('*',
      {
        deals: [
          { name: 'iPhone 6s', manufacturer: 'Apple', image: 'image for iphone 6s', resultsUrl: 'a url' }
        ]
      }
    );
  })

  it('has a created hook', () => {
    expect(typeof MyComponent.created).toBe('function')
  })


  it('sets the correct default data', () => {
    const vm = shallow(MyComponent);
    expect(typeof MyComponent.data).toBe('function')
    const defaultData = MyComponent.data()
    expect(defaultData.deals.length).toBe(0)
    vm.$el.classList.contains('deals-layout')
  })
})