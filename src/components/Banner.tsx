import React, { useEffect, useState } from 'react'

const Banner = () => {
  const [name, setName] = useState('')

  useEffect(() => {
    console.log(name, "name")
  })
  return (
    <div>Test Merge Conflict</div>
  )
}

export default Banner