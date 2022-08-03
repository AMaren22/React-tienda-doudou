import './homeMainUp.css'

const HomeMainUp = () =>{
    return(
        <div className='mainUp'>
            <div className="mainUpContainer">
                <div className='mainUpImgContainer'>
                    <img src='/images/Header.jpeg' alt='' />
                </div>
                <div className='mainUpTextContainer'>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Magna etiam tempor orci eu lobortis. Eu consequat ac felis donec et odio pellentesque. Morbi tincidunt augue interdum velit euismod. Dictumst quisque sagittis purus sit amet volutpat consequat mauris. Nunc id cursus metus aliquam eleifend. Suspendisse faucibus interdum posuere lorem ipsum dolor sit amet. Suspendisse interdum consectetur libero id faucibus. Eget egestas purus viverra accumsan in. Iaculis at erat pellentesque adipiscing commodo elit at. Sapien et ligula ullamcorper malesuada proin libero. Duis ultricies lacus sed turpis tincidunt id aliquet. Justo eget magna fermentum iaculis eu non diam phasellus. Turpis tincidunt id aliquet risus feugiat. Quis eleifend quam adipiscing vitae proin sagittis nisl. Aliquam id diam maecenas ultricies mi eget. Maecenas volutpat blandit aliquam etiam erat velit.

Est ultricies integer quis auctor elit sed vulputate mi.</p>
                </div>
            </div>
            <div className='wavesContainer'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path fill="#d7ab84" fillOpacity="1" d="M0,96L48,133.3C96,171,192,245,288,266.7C384,288,480,256,576,208C672,160,768,96,864,80C960,64,1056,96,1152,133.3C1248,171,1344,213,1392,234.7L1440,256L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z">
                    </path>
                </svg>
            </div>
        </div>
    )
}

export default HomeMainUp