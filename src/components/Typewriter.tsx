import { FC, ReactNode, useEffect, useState } from 'react'

type TypewriterPropsType = {
  text: string
  delay?: number,
  style?: string,
  children?: ReactNode
}

const Typewriter:FC<TypewriterPropsType> = ({
  text,
  delay = 50,
  style,
}) => {
  const [currentText, setCurrentText] = useState('');
  const [textLength] = useState(text.length)

  useEffect(() => {
    const intervalId = setInterval(()=>{
      if(currentText.length < textLength) {
        setCurrentText(currentText + text[currentText.length])
      }
      else {
        clearInterval(intervalId)
      }
    }, delay)

    return () => clearInterval(intervalId); 
  }, [currentText, text, delay])

  return (
    <p className={style}>
      {currentText}
    </p>
  )
}

export default Typewriter