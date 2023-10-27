import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import UserOptions from './UserOptions';
import { Link } from 'react-router-dom';
import { modifytest1bool } from '../../redux/test1bool';

export default function QuestionsTest1() {
  const dispatch = useDispatch();
  const array1 = useSelector((state) => state.test1Array);
  const [startIndex, setStartIndex] = useState(0);
  const questionsPerPage = 3; // Number of questions to display per page

  const questions = [
    'I prefer warm and vibrant colors over cool and muted ones.',
    'I find calm and soothing colors to be the most appealing.',
    'Bright and energetic colors are more to my liking.',
    'I am drawn to neutral and earthy tones in color palettes.',
    'I enjoy the vibrancy of primary colors like red, blue, and yellow.',
    'I prefer pastel shades and soft colors in my surroundings.',
    'Bold and contrasting color combinations catch my eye.',
    'I tend to choose monochromatic color schemes for my decor.',
    'I find myself gravitating towards complex and intricate color patterns.',
    'I like to experiment with unconventional and unconventional color choices.',
    'I appreciate the aesthetics of grayscale and monochrome designs.',
    'I enjoy the richness of deep, dark colors like navy and burgundy.',
    'I am fond of light and airy colors that create a sense of openness.',
    'I prefer a consistent color theme throughout my home or workspace.',
    'I like to mix and match a variety of colors to create a vibrant atmosphere.',
  ];

  const handleClickNext = () => {
    const newStartIndex = startIndex + questionsPerPage;
    setStartIndex(newStartIndex);
  };

  const handleClickBack = () => {
    const newStartIndex = startIndex - questionsPerPage;
    setStartIndex(newStartIndex);
  };

  const visibleQuestions = questions.slice(
    startIndex,
    startIndex + questionsPerPage
  );
  const isLastPage = startIndex + questionsPerPage >= questions.length;

  const isFirstPage = startIndex === 0;

  return (
    <>
      <div className="h-screen w-screen bg-[black] overflow-x-hidden box-border m-0 p-0">
        <div className="lg:max-w-6xl  lg:mx-auto ">
          <div className="p-12">
            <ul className="w-full ">
              {visibleQuestions.map((question, index) => (
                <UserOptions key={index} item={question} />
              ))}
            </ul>
            <div className="flex justify-between">
              {isFirstPage ? (
                <div></div> // Empty space for layout consistency
              ) : (
                <button
                  onClick={handleClickBack}
                  className="bg-[#B8621B] h-12 w-32"
                >
                  Back
                </button>
              )}
              {isLastPage ? (
                <Link to="/user">
                  <button
                    onClick={() => {
                      dispatch(modifytest1bool(true));
                    }}
                    className="bg-[#B8621B] h-12 w-32"
                  >
                    Submit
                  </button>
                </Link>
              ) : (
                <button
                  onClick={handleClickNext}
                  className="bg-[#B8621B]  h-12 w-32"
                >
                  Next
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

// import React, { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux'
// import UserOptions from './UserOptions'
// import { Link } from 'react-router-dom';
// import { modifytest1bool } from '../../redux/test1bool';
// export default function QuestionsTest1() {
//     const dispatch=useDispatch();
//     const array1 = useSelector((state) => state.test1Array)
//     const [showButton, setShowButton] = useState(true);
//     const [startIndex, setStartIndex] = useState(0);
//     const handleClick = () => {
//         // Calculate the new start index by incrementing the current start index by 3
//         const newStartIndex = startIndex + 3;
//         // Update the start index state
//         setStartIndex(newStartIndex);
//     };
//     const visibleItems = array1.slice(startIndex, startIndex + 3);
//     const isLastThreeItems = startIndex + 3 >= array1.length;
//     return (
//         <>
//             <div className="h-screen w-screen bg-[black] overflow-x-hidden box-border m-0 p-0 ">
//                 <div className="lg:max-w-6xl  lg:mx-auto ">
//                     <div className="p-12">
//                         <ul className="w-full ">
//                             {  visibleItems.map((item) => (
//                                 <UserOptions key={item.id} item={item.text} />
//                             ))}
//                         </ul>
//                         {isLastThreeItems &&  showButton  ? (

//                                 <Link  to="/user"><button onClick={()=>{handleClick();dispatch(modifytest1bool(true)) }} className="bg-[#B8621B] h-12 w-32">Submit</button></Link>

//                         ) : (
//                             <button onClick={handleClick} className="bg-[#B8621B]  h-12 w-32">Next</button>
//                         )}
//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }
