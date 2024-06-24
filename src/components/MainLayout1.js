import React, { useState } from 'react';
import { FiUpload,FiFileText, FiImage  , FiPaperclip, FiFile } from 'react-icons/fi';

const DragAndDropArea = () => {
  const [text, setText] = useState('');
  const [files, setFiles] = useState([]);
  const [wordCount, setWordCount] = useState(0);
  const [dragging, setDragging] = useState(false);
  const maxFiles = 5;

  const handleTextChange = (e) => {
    const inputText = e.target.value;
    setText(inputText);
    const wordsArray = inputText.trim().split(/\s+/);
    const count = inputText.trim().length === 0 ? 0 : wordsArray.length;
    setWordCount(count);
  };

  const handleFileChange = (e) => {
    const uploadedFile = e.target.files[0];
    if (files.length < maxFiles) {
      setFiles([...files, uploadedFile]);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setDragging(true);
  };

  const handleDragLeave = () => {
    setDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragging(false);
    const uploadedFile = e.dataTransfer.files[0];
    if (files.length < maxFiles) {
      setFiles([...files, uploadedFile]);
    }
  };

  const handleDeleteFile = (index) => {
    const updatedFiles = files.filter((_, i) => i !== index);
    setFiles(updatedFiles);
  };

  const handleFileClick = () => {
    document.getElementById('file-upload').click();
  };

  const getFileIcon = (fileName) => {
    const extension = fileName.split('.').pop().toLowerCase();
    switch (extension) {
      case 'jpg':
      case 'jpeg':
      case 'png':
      case 'gif':
        return <FiImage className="w-6 h-6 text-gray-500" />;
      case 'pdf':
        return <FiPaperclip className="w-6 h-6 text-red-500" />;
      case 'doc':
      case 'docx':
        return <FiFileText className="w-6 h-6 text-blue-500" />;
      default:
        return <FiFile className="w-6 h-6 text-gray-500" />;
    }
  };

  return (
    <section className="">
      <div className="flex space-x-4 items-center">
        <FiUpload className="w-7 h-7 " />
        <p className="text-black text-lg font-bold hover:text-blue-500">
          Get Complete info about any case from AI-driven research assistance.
        </p>
      </div>
      <div className="relative">
        <textarea
          className="w-full h-20 mt-5 border border-gray-300 rounded-md p-4"
          placeholder="Ex: Land dispute, Mumbai, recent judgments"
          value={text}
          onChange={handleTextChange}
        />
        <p className="text-sm text-gray-500 absolute bottom-3 right-3">
          {wordCount}/80
        </p>
      </div>
      <div className="mt-4">
        <div
          className={`flex flex-col justify-center items-center p-4 border-2 rounded-md text-gray-500 hover:text-gray-700 cursor-pointer mt-4 ${
            dragging ? 'border-blue-500 bg-blue-50' : 'border-dashed'
          }`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          onClick={handleFileClick}
        >
          <svg
            className="w-12 h-12 mb-2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M7 17a2 2 0 104 0H7zM17 17h-4a2 2 0 100 4h4a2 2 0 100-4zM12 9V3m0 0L8.5 6.5M12 3L15.5 6.5"></path>
          </svg>
          <span className="text-base font-medium">
            Drag and drop here or <span className="text-sm">click here to </span>
            <span className="text-lg text-blue-600 underline font-bold">
              upload a file
            </span>
          </span>
          <span className="text-sm mt-2">Maximum uploads: 1</span>
          <span className="text-sm">File formats: JPG, PNG, DOCX, PDF etc.</span>
          <input
            type="file"
            className="hidden"
            onChange={handleFileChange}
            id="file-upload"
          />
        </div>
        <div>
          <h2 className="text-xl mt-5  font-bold text-gray-800">
            Uploaded Files: {files.length}/{maxFiles} 
            
          </h2>
        </div>
        <div className='mt-4 space-y-2 '>
        <div className="mt-4 border space-y-4  rounded-md">
          {files.length > 0 ? (
            files.map((file, index) => (
              <div key={index} className="p-2  border rounded-md ">
                <div className='flex justify-between space-x-4 p-2  '>
                {getFileIcon(file.name)}
                <p className="text-sm text-gray-500">{file.name} </p>
                <button
                  className="text-red-500 text-lg  float-end font-bold"
                  onClick={() => handleDeleteFile(index)}
                >
                  x
                </button>
                </div>
              
              </div>
            ))
          ) : (
            <p className="text-sm p-2 text-gray-500">No file selected</p>
          )}
        </div>

        </div>
        <div className="mt-10">
          <button className='bg-gradient-to-r from-blue-400 to-blue-800  text-white font-bold py-2 px-20 rounded-full float-end'> start</button>
        </div>
      </div>
    </section>
  );
};

export default DragAndDropArea;
