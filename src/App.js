import { useState } from 'react'
import { useApi } from './api/useApi'

function App() {

  const [value, setValue] = useState('initial state')
  const [authText, setAuthText] = useState('login')

  const { getRoot, login } = useApi()

  const clickHandler = async () => {
    const response = await getRoot()
    console.log('response', response)
    setValue(response.message)
  }
  const authClickHandler = async () => {
    const response = await login()
    console.log('response', response)
    setAuthText('logged in')
  }

  return (
    <div className="App">
      <button onClick={clickHandler}>Click Me</button>
      <div>{value}</div>
      <button onClick={authClickHandler}>{authText}</button>
    </div>
  );
}

export default App;
