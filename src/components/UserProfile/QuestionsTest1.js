import React, { useState } from 'react';
import { useSelector } from 'react-redux'
import UserOptions from './UserOptions'
export default function QuestionsTest1() {
    const array1 = useSelector((state) => state.test1Array)
    const [showButton, setShowButton] = useState(true);
    const [startIndex, setStartIndex] = useState(0);
    const handleClick = () => {
        // Calculate the new start index by incrementing the current start index by 3
        const newStartIndex = startIndex + 3;
        // Update the start index state
        setStartIndex(newStartIndex);
    };
    

    const visibleItems = array1.slice(startIndex, startIndex + 3);
    const isLastThreeItems = startIndex + 3 >= array1.length;
    
    

    return (
        <>
            <div className="h-screen w-screen bg-[black] overflow-x-hidden box-border m-0 p-0 ">
                <div className="lg:max-w-6xl  lg:mx-auto ">
                    <div className="p-12">
                        <ul className="w-full ">
                            {  visibleItems.map((item) => (
                                <UserOptions key={item.id} item={item.text} />
                            ))}
                        </ul>
                        {isLastThreeItems &&  showButton  ? (
                            <button onClick={handleClick} className="bg-[#B8621B] h-12 w-32">Submit</button>
                        ) : (
                            <button onClick={handleClick} className="bg-[#B8621B]  h-12 w-32">Next</button>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}
