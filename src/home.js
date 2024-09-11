import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <>
            <div id="name">
                <h1>sztm14&#39;s Portfolio</h1>
                <p>E-<span>M</span>ail:sztm14<span>☆</span>yahoo.co.jp（☆⇒@）<br />2000年生まれ。京都府八幡市在住。<br />2024年6月より就労移行支援通所。<br />Webデザイナー志望。</p>
            </div>
            <div id="containers">
                <Container img="profile" />
                <Container img="about" />
                <Container img="crystal" />
                <Container img="memo" />
            </div>
        </>
    )
}
function Container(props) {
    return (
        <div class="container">
            <div class="click">
                <Link to={props.img ? "/" + props.img : "/"}><img src={props.img ? "/img/" + props.img + ".jpg" : ""}></img></Link>
            </div>
        </div>
    )
}

export default Home