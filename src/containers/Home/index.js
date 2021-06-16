import React from 'react';
import SideBar from '../../components/SideBar';
import Card from '../../components/UI/Card';
import RecentPost from './recentPosts';
import blogData from '../../data/Sdata.json'

;
import './style.css';
import { render } from '@testing-library/react';

const SideImage=(props)=>{
    return(
        <div style={{height:'${props.height}px'}} style={{width:'30%'}}>
                <img src={props.src} alt="blogImg" />
            </div>
    )
}

const imageGallary=props=>{
    (
        
    <div className="gallaryPost" style={props.gallaryStyle}>
                   
    <section style={{width:'70%'}} >
        <div className="mainImageWrapper">
             <img src={"https://www.wpbeginner.com/wp-content/uploads/2018/07/whatisblog.png"} alt="blogImg" />
        </div>

    </section>
    <section className={"sideImgWrapper"} style={{width:'30%'}}>

        <SideImage height={props.sideImgHeight} 
        src={require('../../images/'+props.imagesArray[1] )} alt="sidebar1"/>


        <SideImage height={props.sideImgHeight} 
        src={require('../../images/'+props.imagesArray[2] )} alt="sidebar2"/>


        <SideImage height={props.sideImgHeight} 
        src={require('../../images/'+props.imagesArray[3] )} alt="sidebar3"/>


            
    </section>
</div>

);
}

const Home=props =>{
    const gallaryHeight=450;
    const gallaryStyle={
        height:gallaryHeight+'px',
        overflow:'hidden'
    }

    const sideImgHeight=gallaryHeight/3;

    const imgAr=blogData.data.map(post=>post.blogImage)


    return(
        <div >
            <Card >
                    <imageGallary 
                    largewidth="70%"
                    smallWidth="30%"
                    sideImgHeight={sideImgHeight}
                    gallaryStyle={gallaryStyle}
                    imagesArray={imgAr}
                     />

                    
                
             
            </Card>

        <section className="HomeContainer">
            
            <RecentPost  style={{width:'70%'}}/>
            <SideBar />
        </section>
            
        </div>
        
    )
}

export default Home;