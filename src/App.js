import { useState } from 'react'
import { useApi } from './api/useApi'

function App() {

  const [value, setValue] = useState('initial state')

  const { getRoot } = useApi()

  const clickHandler = async () => {
    const response = await getRoot()

    setValue(response.message)
  }

  return (
    <div className="App">
      <button onClick={clickHandler}>Click Me</button>
      <div>{value}</div>
    </div>
  );
}

export default App;
