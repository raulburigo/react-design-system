import { useState } from "react"
import {Button} from "../lib/Button"

export function Teste() {
    const [test, setTest] = useState(false)
    return <div>
        <h1>Teste</h1>
        <Button onClick={() => setTest(true)} data-testid="clicar">Testar</Button>
        {test && <p>testado</p>}
        </div>
  
  }