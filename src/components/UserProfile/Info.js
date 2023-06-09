import React from 'react'
export default function Info() {
  const formData = [
    { label: 'Full Name', type: 'text', id: 'name', value: 'John Doe', readOnly: true },
    { label: 'Email', type: 'email', id: 'email', value: 'johndoe@example.com', readOnly: true },
    { label: 'Age', type: 'number', id: 'age', value: '25', readOnly: true },
    { label: 'Gender', type: 'text', id: 'gender', value: 'Male', readOnly: true },
  ];
  return (
    <>
      <div className="  w-full bg-[#262A56] border / border-gray-200">
        <div className='flex flex-col w-full'>
          <div >
            <form className='flex flex-col space-y-4  p-8'>
              {formData.map((field) => (
                <div className="flex flex-row justify-between" key={field.id}>
                  <label className="block mb-2 text-[#E3CCAE]" htmlFor={field.id}>
                    {field.label}
                  </label>
                  <input
                    className="w-[70%] px-4 py-2 border rounded-sm bg-[#B8621B] text-[#E3CCAE]"
                    type={field.type}
                    id={field.id}
                    value={field.value}
                    readOnly={field.readOnly}
                  />
                </div>
              ))}
              <div className=" flex flex-row ">
                <button type="submit" className="bg-[#B8621B]  w-[20%] h-[3rem] text-[#E3CCAE] ">Edit here</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}
