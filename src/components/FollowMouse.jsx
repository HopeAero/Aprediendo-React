import React, { useEffect, useState } from 'react'
export const FollowMouse = () => {
  const [enable, setEnable] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    console.log('Efecto', { enable })

    const handleMouseMove = (event) => {
      setPosition({ x: event.clientX, y: event.clientY })
    }

    if (enable) { window.addEventListener('mousemove', handleMouseMove) }

    // Clean up
    // Cuando el componente se desmonta, se ejecuta el return
    // Cuando cambian las dependencias, se ejecuta el return
    return () => {
      console.log('Clean up')
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [enable])
  return (
    <div>
      <div style={{
        position: 'absolute',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        border: '1px solid #fff',
        borderRadius: '50%',
        opacity: 0.8,
        pointerEvents: 'none',
        left: -25,
        top: -25,
        width: 50,
        height: 50,
        transform: `translate(${position.x}px, ${position.y}px)`
      }}
      />
      <button onClick={() => {
        setEnable(!enable)
      }}
      >{enable ? 'Desactivar' : 'Activar'} seguir puntero
      </button>
    </div>
  )
}
