import React from 'react'
import Button from "../common/Button"

export const Toolbar = () => {
    return (
        <div className="app-toolbar">
            <div className="block-title">
                <h1>Software List</h1>
            </div>
            <div className="block-button">
                <Button
                    theme="default"
                >+ Add Software
                </Button>
            </div>
        </div>
    )
  }


  
