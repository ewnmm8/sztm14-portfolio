import React, { useEffect} from 'react'
import { Link } from 'react-router-dom'
import renderer from './three.js'

{/*
export function () {
    return (
        <div id="contents">
            <Link to="/"><img id="close-button" src="/img/close.png" /></Link>
            
        </div>
    )
}
*/}
export function Profile() {
    return (
        <div id="contents">
            <Link to="/"><img id="close-button" src="/img/close.png" /></Link>
            <h2>Profile</h2>
            <img class="content" src="/img/profile1.jpg" style={{ width: "120px" }} />
        </div>
    )
}
export function About() {
    return (
        <div id="contents">
            <Link to="/"><img id="close-button" src="/img/close.png" /></Link>
            <h2>このサイトについて</h2>
            <h3 class="content">デザイン</h3>
            <div class="content">
                <table>
                    <tbody>
                        <tr>
                            <td>使用ツール</td>
                            <td>：</td>
                            <td>Figma</td>
                        </tr>
                        <tr>
                            <td>制作時期</td>
                            <td>：</td>
                            <td>2024年9月</td>
                        </tr>
                        <tr>
                            <td>制作時間</td>
                            <td>：</td>
                            <td>3日</td>
                        </tr>
                        <tr>
                            <td>説明</td>
                            <td>：</td>
                            <td>Figmaでデザインを制作。ダークモードを意識しました。</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="content">
                <img src="/img/Desktop-1.jpg" style={{ marginTop: "4px", width: "50%" }} />
                <img src="/img/Desktop-2.jpg" style={{ marginTop: "4px", width: "50%" }} />
                <img src="/img/iPhone13&14-1.jpg" style={{ marginTop: "4px", width: "50%" }} />
                <img src="/img/iPhone13&14-2.jpg" style={{ marginTop: "4px", width: "50%" }} />
            </div>
            <h3 class="content">サーバー構築</h3>
            <div class="content">
                <table>
                    <tbody>
                        <tr>
                            <td>使用ツール</td>
                            <td>：</td>
                            <td>ConoHa VPS, Docker(Apache), Let's Encrypt, ChatGPT</td>
                        </tr>
                        <tr>
                            <td>制作時間</td>
                            <td>：</td>
                            <td>1日</td>
                        </tr>
                        <tr>
                            <td>説明</td>
                            <td>：</td>
                            <td>VPSを借り、VPS上にDockerを立ち上げてDockerイメージからApacheを構築。詳しくないため、かなりChatGPTに助けられてます。</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <h3 class="content">コーディング</h3>
            <div class="content">
                <table>
                    <tbody>
                        <tr>
                            <td>使用ツール</td>
                            <td>：</td>
                            <td>HTML, PHP, SASS, JavaScript, Docker(Ubuntu), Node.js, React, jQuery, webpack, VSCode, SFTP, ChatGPT</td>
                        </tr>
                        <tr>
                            <td>制作時間</td>
                            <td>：</td>
                            <td>1週間</td>
                        </tr>
                        <tr>
                            <td>説明</td>
                            <td>：</td>
                            <td>デザインをWeb上に実装するために、CDN版のReactやjQueryを使用して制作。途中エラーに行き詰まりNode.jsでコンパイルする方式に変更。ついでにSASSも導入。PHPはアクセスカウンターの実装に使用予定。わからない点をChatGPTに質問することで学習コストと検索時間が大幅に下がりました。</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export function Crystal() {
    useEffect(() => {
        document.getElementById("three-crystal").appendChild(renderer.domElement)
    }, []) // []を渡すことで、一度だけ実行される
    return (
        <div id="contents">
            <Link to="/"><img id="close-button" src="/img/close.png" /></Link>
            <div class="content" style={{ display: "flex", justifyContent: "center" }}>
                <p style={{ paddingLeft: "8em" }}>使用ツール<br />制作時期<br />制作期間<br />説明</p>
                <p>：<br />：<br />：<br />：</p>
                <p>Blender<br />2024年7月<br />3時間<br />就労支援事業所のグループワークで制作したレジン製のクリスタルを3DCGソフトで再現したものです。</p>
                <table>
                    <tbody>
                        <tr>
                            <td>使用ツール</td>
                            <td>：</td>
                            <td>Blender</td>
                        </tr>
                        <tr>
                            <td>制作時期</td>
                            <td>：</td>
                            <td>2024年7月</td>
                        </tr>
                        <tr>
                            <td>制作時間</td>
                            <td>：</td>
                            <td>3時間</td>
                        </tr>
                        <tr>
                            <td>説明</td>
                            <td>：</td>
                            <td>就労支援事業所のグループワークで制作したレジンのクリスタルを3DCGソフトで再現したものです。</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <img class="content" src="/img/crystal1.jpg" />
            <div id="three-crystal" class="content"></div>
        </div>
    )
}
export function Memo() {
    return (
        <div id="contents">
            <Link to="/"><img id="close-button" src="/img/close.png" /></Link>
            <a href="https://ewnmm8.github.io/web-note/" target="_blank" rel="noopener noreferrer">ewnmm8.github.io/web-note/</a>
        </div>
    )
}