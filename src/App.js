import React, {lazy, Component, Suspense} from 'react'
import {importMDX} from 'mdx.macro'
const Content = lazy(() => importMDX('./Content.mdx'))
const Homepage = lazy(() => importMDX('./Homepage.mdx'))

class App extends Component {
  render() {
    return (
      <div>
        <Suspense fallback={<div>Loading...</div>}>
          <Content />
          {/* <Homepage /> */}
        </Suspense>
      </div>
    )
  }
}

export default App