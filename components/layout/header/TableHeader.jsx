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
                {/* <Link href="/Software/create" passHref>
                    <Button
                        as="a"
                        theme="default"
                    >{buttonText}
                    </Button>
                </Link> */}
                <Link href="/Software/create" passHref>
                    <a
                        className="btn btn-default"
                    >{buttonText}
                    </a>
                </Link>

            </div>
        </div>
    )
  }
