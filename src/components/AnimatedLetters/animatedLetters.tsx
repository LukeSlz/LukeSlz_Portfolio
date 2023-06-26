import './animatedLetters.scss';

const AnimatedLetters = ({ letterClass, strArr, idx }: { letterClass: string, strArr: string[], idx: number }) => {
  return (
    <span>
      {
        strArr.map((char: string, i: number) => (
          <span key={char+i} className={`${letterClass} __${i + idx}`}>
            {char}
          </span>
        ))
      }
    </span>
  )
}

export default AnimatedLetters;