import {Router} from './routes/Router'
import { ChakraProvider } from '@chakra-ui/react'
import {GlobalContext} from './contexts/GlobalContext'

function App() {

  return (
    <ChakraProvider>
      <GlobalContext.Provider value={{}} >
        <Router />
      </GlobalContext.Provider>
    </ChakraProvider>
  )
}

export default App
