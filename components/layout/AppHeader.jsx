import React from 'react'
import Button from "../common/Button"

export const AppHeader = () => {
    return (
        <div className="app-header">
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


  
