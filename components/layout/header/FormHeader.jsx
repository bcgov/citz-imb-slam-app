import React, { useState } from 'react'
import Button from "../../common/Button"
import { useRouter } from "next/router"



export const FormHeader = ({linkText, formState}) => {

    const [state, setState] = useState(formState)

    const router = useRouter()
    

    return (
        <div className="app-header">
            <div className="block-title">
                <button onClick={()=>router.back()}>{linkText}</button>
            </div>
            {state === 'read' && (
            <div className="block-button">
                <Button
                    theme="muted warning"
                >Delete
                </Button>
                <Button
                    theme="default"
                >Edit
                </Button>
            </div>
            )}
        </div>
    )
  }



  
