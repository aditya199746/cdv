import React,{useState,useEffect} from 'react'
import Card from '../UI/Card'
import './style.css'
import blogPost from '../../data/Sdata.json'
import { NavLink } from 'react-router-dom'


const SideBar=(props)=> {

    const [posts, setPosts] = useState([])

    useEffect(() => {
       
        const posts=blogPost.data;
        setPosts(posts);
    },[posts]);

    return (
        <div className="sidebarContainer" style={{width:props.width}}>
        <Card style={{marginBottom:'20px'}}>
        <div className="cardHeader">
        <span>About Us</span>
        </div>
        <div className="profileImg">
            <img src="https://pbs.twimg.com/profile_images/1214495220328349696/eQgYYrwQ.jpg" alt="my Image"></img>
        </div>
        <div className="cardBody">
        <p className="personalBio">My name is aditya and i am a software developer specialization in react</p>
        </div>
    </Card>

    <Card style={{marginBottom:'20px'}}>
        <div className="cardHeader"></div>
        <span>Social Network</span>
        
    </Card>

    <Card style={{marginBottom:'20px'}}>
    <div className="cardHeader">
    <span>Recent Posts</span>
    </div>

    <div className="recentPosts">
        {
            posts.map(post=>{
                return(
                    <NavLink key={post.id} to={'/post/${post.id}'}>
                        <div className="recentPost">
                        <h3 >{post.blogTitle}</h3>
                        <span>{post.postedOn}</span>
                        </div>
                    </NavLink>
                    
                )
            })
        }


        
    </div>

    
    </Card>
        </div>
        
    )
}

export default SideBar;