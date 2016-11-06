
import test from 'ava'
import jsdom from 'jsdom-global'

jsdom('<html></html>')

import cv from '.'

test('does not throw', t => {
  t.notThrows(() => {
    const keys = cv({ blue: '#07c' })
    const v = cv('blue')
  })
})

test('returns an array of keys', t => {
  const keys = cv({
    blue: '#08c',
    red: '#f40'
  })
  t.true(Array.isArray(keys))
  t.deepEqual(keys, [ 'blue', 'red' ])
})

test('returns a CSS var() function', t => {
  t.is(cv('blue'), 'var(--blue)')
})

test('injects styles', t => {
  t.is(cv.style.Blue, '#08c')
  t.is(cv.style.Red, '#f40')
})

