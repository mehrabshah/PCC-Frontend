import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { postArrayAdd } from '../../redux/postarray';
export default function PostJob() {
    const navigate = useNavigate();
    const dispatch=useDispatch();
    const [jobTitle, setJobTitle] = useState('');
    const handleTitleChange = (e) => {
        setJobTitle(e.target.value);
    };
    const [jobDescription, setJobDescription] = useState('');
    const handleDescriptionChange = (e) => {
        setJobDescription(e.target.value);
    };
    const [jobTags, setJobTags] = useState('');

    const handleTagsChange = (e) => {
        setJobTags(e.target.value);
    };

    // const [selectedImage, setSelectedImage] = useState(null);

    // const handleImageChange = (e) => {
    //     const file = e.target.files[0];
    //     setSelectedImage(file);
    // };

    // const handleUpload = () => {
    //     // Perform upload logic here
    //     if (selectedImage) {
    //         // You can use the 'selectedImage' file for further processing, such as uploading to a server or displaying it in the UI
    //         console.log('Selected image:', selectedImage);
    //     }
    // };
    const handleSubmit = (e) => {
        e.preventDefault();
        
   

        // Create a new object with job information
        const newObject = {
            jobTitle,
            jobDescription,
            jobTags,
        };

        // Dispatch the addObject action with the new object
        dispatch(postArrayAdd(newObject));

        // Redirect to the employer location
        // Navigate to the employer page
        navigate('/employer');
    };
    return (
        <>
            <div className="h-screen w-screen  bg-black overflow-x-hidden box-border m-0 p-0 ">
                <div className="lg:max-w-6xl h-full  lg:mx-auto ">
                    {/* container-inner */}
                    <div className="lg:flex lg:flex-row  h-full flex flex-col     items-center justify-center">
                        <div className='bg-[#262A56]  p-12 border  border-gray-200  space-y-12 m-4'>
                            <div className='flex flex-row items-center justify-center'>
                                <h1 className='text-[#E3CCAE] uppercase text-4xl font-bold'>Add Job Information</h1>
                            </div>
                            <form onSubmit={handleSubmit} className="space-y-6   ">


                                <div className="flex-col space-y-1">
                                    <label htmlFor="jobTitle" className="mr-2  text-[#E3CCAE] font-bold uppercase text-2xl ">Job Title:</label>
                                    <input
                                        type="text"
                                        id="jobTitle"
                                        className="w-full px-4 py-2 rounded border border-gray-300 bg-[#B8621B] focus:outline-none placeholder:text-[#E3CCAE]"
                                        value={jobTitle}
                                        onChange={handleTitleChange}
                                        placeholder="Enter job title..."
                                        required
                                    />
                                </div>
                                <div className="flex flex-col space-y-1">
                                    <label htmlFor="jobTags" className="text-[#E3CCAE] mr-2  font-bold uppercase text-2xl">Job Tags:</label>
                                    <input
                                        type="text"
                                        id="jobTags"
                                        className="w-full px-4 py-2 rounded border border-gray-300 bg-[#B8621B] focus:outline-none / placeholder:text-[#E3CCAE]"
                                        value={jobTags}
                                        onChange={handleTagsChange}
                                        placeholder="Enter job tags (comma-separated)..."
                                        required
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <label htmlFor="jobDescription" className="text-[#E3CCAE]  mb-2 font-bold uppercase text-2xl">Job Description:</label>
                                    <textarea
                                        id="jobDescription"
                                        className="w-full px-4 py-2 h-32 rounded border bg-[#B8621B] focus:outline-none placeholder:text-[#E3CCAE] "
                                        value={jobDescription}
                                        onChange={handleDescriptionChange}
                                        placeholder="Enter job description..."
                                        required

                                    />
                                </div>

                                {/* <div>
                                    <input type="file" onChange={handleImageChange} accept="image/*" />
                                    <button onClick={handleUpload} className="text-[#E3CCAE]"></button>
                                </div> */}
                                <div className='w-full flex flex-row justify-end'>
                                    <button type="submit" className='bg-[#B8621B] h-10 w-32 text-[#E3CCAE] flex justify-center items-center hover:bg-blue-900 '>Submit</button>
                                </div> 

                            </form>

                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}
