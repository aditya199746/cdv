import React,{useEffect,useState} from 'react'
import Card from '../UI/Card'
import './style.css'
import blogPost from '../../data/Sdata.json';
 const BlogPost=(props) =>{
    
    const [post, setpost] = useState({
         id: "",
            blogCategory: "",
            blogTitle : "",
            slug: "",
            postedOn: "",
            author: "",
            blogImage: "",
            blogText: ""
        
    });
    const[postId, setpostId]=useState('');
    useEffect(() => {
        const postId=props.match.params.postId;
        const post=blogPost.data.find(post=>post.id==postId);
        setpost(post);
        setpostId(postId);
    },[post,props.match.params.postId]);

    if(post.blogImage=="")return null;


    return (
        <div className="blogPostContainer">
            <Card>
            <div className="blogHeader">
            <span className="blogCategory">{post.blogCategory}</span>
            <h1 className="postTitle">{post.blogTitle}</h1>
            <span className="postedBy">{post.postedOn}  {post.author}</span>
            </div>

            <div className="postImgContainer"></div>
            <img  src={"../../images/1.jpg"} alt="Post Img" />
                
        <div className="postContent">
            <h3>{post.blogTitle}</h3>
            <p>{post.blogText}</p>
        </div>
                </Card>
            </div>
       
    )
}


export default BlogPost;