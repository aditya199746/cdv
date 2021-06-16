import React from 'react'
import "./style.css";
import Card from '../../components/UI/Card';
import SideBar from '../../components/SideBar';
import BlogPost from '../../components/BlogPost/index'

export default function Post(props) {
    return (
        <div>
            <section className="container">
                <BlogPost {...props}/>
                <SideBar  />
            </section>
        </div>
    )
}
