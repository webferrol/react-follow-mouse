import { useEffect, useState } from 'react'
import '../../ball.css'
export const FollowMouse = () => {
  const [enabled, setEnabled] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  useEffect(() => {
    console.log('useEffect')
    const handleMove = event => {
      const { clientX: x, clientY: y } = event
      setPosition({ ...position, x, y })
    }

    if (enabled) {
      window.addEventListener('pointermove', handleMove)
    }

    // Cleanup
    // Cuando el componente se desmonta
    // Cuando cambian las dependencias antes de ejecutar el efecto de nuevo
    return () => {
      console.log('cleanup')
      window.removeEventListener('pointermove', handleMove)
    }
  }, [enabled])
  return (
    <>
      <div className='ball' style={{ transform: `translate(${position.x}px,${position.y}px)` }}> </div>
      <button onClick={() => setEnabled(!enabled)}>{enabled ? 'Desactivar' : 'Activar'} seguir puntero</button>
    </>
  )
}
