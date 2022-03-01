import React, { useState } from 'react'
import Button from "../common/Button"


export const FormHeader = () => {

    const [state, setState] = useState('create')
    

    return (
        <div className="app-header">
            <div className="block-title">
                <a href="/Software">Back to Software List</a>
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



  
