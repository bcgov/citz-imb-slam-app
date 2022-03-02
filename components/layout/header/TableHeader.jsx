import React from 'react'
import Button from "../../common/Button"
import Link  from "next/link";

export const TableHeader = ({title, buttonText}) => {
    return (
        <div className="app-header">
            <div className="block-title">
                <h1>{title}</h1>
            </div>
            <div className="block-button">

                <Link href="/Software/create" >
                    {/* <Button
                        theme="default"
                    >{buttonText}
                    </Button> */}
                    {buttonText}
                </Link>
            </div>
        </div>
    )
  }
