import React, { useEffect, useState } from 'react'

const Banner = () => {
  const [name, setName] = useState('')

  useEffect(()=> {
    console.log(name)
  })
  return (
    <div>Banner</div>
  )
}

export default Banner