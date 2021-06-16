import React from 'react'
import Card from '../../../components/UI/Card'
import './style.css'


export default function RecentPost(props) {
    return (
        <div style={props.style}>
                <Card style={{marginBottom:'20px'}}>
                    <div className="postImgWrapper">
                        <img src={"https://www.wpbeginner.com/wp-content/uploads/2018/07/whatisblog.png"} alt="img" />
                    </div>

                    <div style={{textAlign:'center'}}>
                        <span>Featured</span>
                        <h2>Hotness Mantra To Live Fit life</h2>
                        <span>posted on 12025</span>
                        <p>qwertyujhgfdZxcvbnkjhgf wergh sdfg sdfg</p>

                        <button>Read More</button>
                    </div>
                </Card>

                

            </div>
    )
}
