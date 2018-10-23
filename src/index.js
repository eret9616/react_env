console.log(`哈哈`)

import React from 'react'
import ReactDOM from 'react-dom'

const myh1 = React.createElement('h1', null, '子节点')
const mydiv = React.createElement('div', null, '这是一个div', myh1)

ReactDOM.render(mydiv, document.getElementById('app'))
