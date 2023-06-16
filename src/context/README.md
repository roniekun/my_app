import

import { ThemeContext} from '../context/ThemeContext';



wrap all the child component with  this 

<ThemeContext.Consumer>
  {({ theme }) => (

          <!-- pass this iD: id={`component-${theme}`} -->

          <!-- your components -->

     )}
    </ThemeContext.Consumer>

<alt>
import React, { useContext } from 'react';
import { ThemeContext} from 

const { theme } = useContext(ThemeContext);
