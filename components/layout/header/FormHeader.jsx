import React, { useState } from 'react'
import Button from "../../common/Button"
import { useRouter } from "next/router"



export const FormHeader = ({linkText, formState}) => {

    const [state, setState] = useState(formState)

    const router = useRouter()
    

    return (
        <div className="app-header">
            <div className="block-title">
                <a onClick={()=>router.back()}>{linkText}</a>
            </div>
            {state === 'read' && (
            <div className="block-button">
                <a
                    className="btn btn-muted warning"
                >Delete
                </a>
                <a
                    className="btn btn-muted"
                >Edit
                </a>
            </div>
            )}
        </div>
    )
  }



  
