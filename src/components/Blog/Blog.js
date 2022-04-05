import React from 'react';

const Blog = () => {
    return (
        <div className=' grid grid-cols-1 md:grid-cols-2 gap-4 text-left p-12 '>
            <div>
                <h3 className='font-medium text-xl'>Q-1: What is semantic tag?</h3>
                <p>Ans: Semantic tag describe meaninig clearly human and machine.Its capable to  communicate with browser and developer. for example,h1 render websites top level heading .But span tag cannot give result like h1 tag.Search engines will consider its contents as important keywords to influence by its.</p>
            </div>

            <div>
                <h3 className='font-medium text-xl'>Q-2: What is context Api and which purpose use it? </h3>
                <p>Ans: Context API is a React structure.Its installing a state management library in project and cost project performance and increase bundle size.Its enable to exchange unique details and assists in solving prop-drilling from all levels of application.Context api provides a way to pass data through the component tree without having to pass props down manually at every level.Basically solving one major problem React problem — prop drilling.</p>
            </div>
        </div>
    );
};

export default Blog;