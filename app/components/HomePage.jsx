import React, { Component } from 'react';




const HomePage = (props) => {

    return (
        <div className='homePageContainer'>
            <div className='homePageHeader'>
                <img className='astronautGif' src='./gifs/astro005.gif' style={{ height: '300px', width: '300px' }} alt='a gif should be here' />
                <img className='laptopGif' src='./gifs/laptop1.gif' style={{ height: '130px', width: '130px' }} alt='a gif should be here' />
                <img className='spaceGif' src='./gifs/space2.gif' style={{ height: '100%', width: '100%' }} />
                <img className='alienGif' src='./gifs/alien1.gif' style={{ height: '125px', width: '125px' }} />



            </div>
        </div>
    )
}


export default HomePage;