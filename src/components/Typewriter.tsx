import { useEffect, useState } from 'react'
import { TypewriterPropsType } from '../@types/component';

const Typewriter = ({
  text,
  delay = 50,
  style,
}: TypewriterPropsType) => {
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