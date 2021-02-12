import React, { memo } from 'react'

export const Small = memo(({ value }) => {
    console.log('called again');
    return (
        <small>{value}</small>
    )
}
)