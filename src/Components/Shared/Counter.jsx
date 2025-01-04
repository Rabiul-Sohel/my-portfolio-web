import React, { useEffect, useState } from 'react';

const FramerCountingEffect = ({targetedValue, duration = 2}) =>{
    const [currentValue, setCurrentValue] = useState(0)

    useEffect(()=>{
        const start = performance.now()
        const animate = (time) =>{
            const progress = Math.min((time - start)/(duration * 1000), 1)
            const value = Math.round(progress * targetedValue)
            setCurrentValue(value)
            if(progress < 1) requestAnimationFrame(animate)
        }
    requestAnimationFrame(animate)
    }, [targetedValue, duration])
    return (
        <div className="text-4xl font-bold text-center">
          {currentValue}
        </div>
      );
}

const Counter = ({targetedValue, duration}) => {
    return  <FramerCountingEffect targetedValue={targetedValue} duration={duration}/>
};

export default Counter;