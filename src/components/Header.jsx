import {useState,useEffect} from 'react'

const Header = ({isNewfest,timeleft}) => {
    let [currWord,setCurrWord]=useState("Incredible");

    let words = [  "Abundant", "Blissful", "Joyous", "Fortunate", "Fruitful", "Thriving", "Successful", "Celebratory", 
      "Hopeful", "Grateful", "Blessed", "Opulent", "Thriving", "Rich", "Flourishing", "Harmonious", 
      "Vibrant", "Peaceful", "Radiant", "Welcoming"
      ];
      useEffect(()=>{
        let wordChange=setInterval(()=>{
            setCurrWord(prevword=>{
                let currInd=words.indexOf(prevword)
                return words[(currInd+1)%words.length]
            })
        },1000)

        //cleanup
        return ()=>clearInterval(wordChange)
      },[]) //run only once
  return (
    <div className='header-container p-4 container border d-flex align-items-center justify-content-between '>
        <div className="text-start">
            <h1 className='header-title'>{isNewfest?"Happy Pongal🎉🥳":"Advanced Happy Pongal🥳"}</h1>
            <p className='fs-4'>Make this Pongal <strong className='text-success fs-1'>{currWord}</strong></p>
      </div>
      {/* countsown-timer */}
      <div className="timer-section">
        <h3 className='border border-danger rounded-pill p-3 fw-bold fs-1'>
            {timeleft.days<10?`0${timeleft.days}D`:timeleft.days}:
            {timeleft.hours<10?`0${timeleft.hours}H`:timeleft.hours}:
            {timeleft.min<10?`0${timeleft.min}M`:timeleft.min}:
            {timeleft.sec<10?`0${timeleft.sec}`:timeleft.sec}
        </h3>
      </div>
    </div>
  )
}

export default Header
