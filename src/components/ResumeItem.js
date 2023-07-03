import React from 'react'
import * as style from '../styles/resumeItem'

const ResumeItem = ({ Title, Icon, Value, Color }) => {

    return (
        <>
            <style.Container>
                <style.HeaderCard>
                    <style.HeaderTitle>{Title}</style.HeaderTitle>
                    {
                        (
                            () => {
                                switch (Color) {
                                    case 0:
                                        return <Icon color="green" />
                                    case 1:
                                        return <Icon color="red" />
                                    default:
                                        return <Icon color="yellow" />
                                }
                            }
                        )()
                    }
                </style.HeaderCard>
                <style.Total>{Value}</style.Total>
            </style.Container>
        </>
    )
}

export default ResumeItem