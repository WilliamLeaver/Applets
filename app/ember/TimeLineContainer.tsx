import React from 'react'

type TimeLineContainerProps = { timeline: number };

const TimeLineContainer: React.FC<TimeLineContainerProps> = ({timeline}) => {
    const checkTime = (timeline: number) => {
        if (timeline >= 30 && timeline < 60) {
            return <div>It is cold out here, but you have a fire... for now</div>
        }
        else if (timeline >= 60) {
            return <div>Ahh, Seems my wood supply is not infinite... I had better look for more</div>
        }
        else {
            return null
        }
    }
  return (
    <>
        {timeline < 30 ? null : (
        <div className="w-1/5 p-2 border-2 rounded-lg">
            <h1 className='font-extrabold text-lg text-center border-b border-dotted'>Thoughts</h1>
            {checkTime(timeline)}
        </div> )}
    </>
    )
}

export default TimeLineContainer