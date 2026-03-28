import React from 'react'
import {type FormEvent ,useState} from 'react';
import Navbar from '~/components/navbar';
import FileUploader from '~/components/fileUploader';

const Upload =()=>{
    const[isProcessing, setIsProcessing]=useState(false);
    const [statusText, setStatusText] =useState('');
    const [file,setFile]=useState<File |null>(null);

    const handleFileSelect= (file: File |null)=>{
        setFile(file)
    }

    const handleSubmit =(FormEvent<HTMLFormElement>)=>{

    }
    return (
        <main className="bg-[url('/images/bg-main.svg')] bg-cover">
            <Navbar />

            <section className="main-section">
                <div className="page-heading py-16">
                    <h1>Smart feedback for your dream job</h1>
                    {isProcessing ?(
                        <>
                            <h2>{statusText}</h2>
                            <img src="/images/resume-scan.gif" className="w-full" />
                        </>
                    ):(
                        <h2>Drop your resume for an ATS score and improvement tips.</h2>
                    )}
                    {!isProcessing && (
                        <form id="upload-form" onSubmit={handleSubmit} className="flex flex-col gap-4 mt-8">
                            <div className='form-div'>
                                <label htmlfor="company-name">Company Name</label>
                                <input type="text" name="comapny-name" placeholder="Company Name" id="company-name"></input>
                            </div>
                            <div className='form-div'>
                                <label htmlfor="job-title">Job Title</label>
                                <input type="text" name="job-title" placeholder="Job Title" id="job-title"></input>
                            </div>
                            <div className='form-div'>
                                <label htmlfor="job-description">Job Description</label>
                                <textarea rows={5}  name="job-description" placeholder="Job Description" id="job-description"></textarea>
                            </div>
                            <div className='form-div'>
                                <label htmlfor="uploader">Upload Resume</label>
                                <FileUploader onFileSelect={handleFileSelect} />
                            </div>

                            <button className="primary-button" type="submit">
                                Analyze Resume
                            </button>

                        </form>
                    )}
                </div>
            </section>
        </main>
    )
}

export default Upload