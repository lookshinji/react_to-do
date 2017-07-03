//Libs
import React from 'react'
import { Route  } from 'react-router-dom'

//Components/Containers
import App from './containers/App'

const Routes = (
    <div>
      <Route exact path='/' component={App} />
    </div>
)

export default Routes
