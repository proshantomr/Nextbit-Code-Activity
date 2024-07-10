'use client'
import React from 'react';

const Page = ({params}) => {
    // console.log(params)
    return (
        <div>
            This is dynamic page {params.daynamic_page}
        </div>
    );
};

export default Page;