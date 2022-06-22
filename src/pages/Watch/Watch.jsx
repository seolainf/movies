import React from 'react'
import { useParams } from 'react-router-dom'

const Watch = () => {
    const { slug } = useParams()
    console.log(slug);
    return (
        <div>Watch</div>
    )
}

export default Watch