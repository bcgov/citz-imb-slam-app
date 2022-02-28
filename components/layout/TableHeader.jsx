import React from 'react'
import Button from "../common/Button"


export const TableHeader = ({title, buttonText}) => {
    return (
        <div className="app-header">
            <div className="block-title">
                <h1>{title}</h1>
            </div>
            <div className="block-button">
                <Button
                    theme="default"
                >{buttonText}
                </Button>
            </div>
        </div>
    )
  }
