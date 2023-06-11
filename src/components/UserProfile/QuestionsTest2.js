import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { modifytest2bool } from '../../redux/test2bool';
import UserOptions from './UserOptions'
export default function QuestionsTest2() {
    const dispatch=useDispatch()
    const array1 = useSelector((state) => state.test2Array)
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
                            
                              <Link  to="/user"><button onClick={()=>{handleClick();dispatch(modifytest2bool(true))}} className="bg-[#B8621B] h-12 w-32">Submit</button></Link>
                            
                        ) : (
                            <button onClick={handleClick} className="bg-[#B8621B]  h-12 w-32">Next</button>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}
