// ! image import 
import { Link } from 'react-router'
import logo from '../../../assets/images/logo.png'
// ! image import 
import Container from '../Container'
const Navbar = () => {
    return (
        <><section className='bg-[#1C1E53]'>
            <Container>
                <div className="mainContent flex items-center justify-between py-5">
                    <div className="content1">
                        <a href='#'>
                            <img src={logo} alt="logo" />
                        </a>
                    </div>
                    <div className="content2 flex items-center gap-12">
                        <div className='menus'>
                            <ul className='flex items-center gap-8'>
                                <li><a href="#" >Home</a></li>
                                <li><a href="#">About Us</a></li>
                                <li><a href="#">Features</a></li>
                                <li><a href="#">Pricing</a></li>
                                <li><a href="#">FAQ</a></li>
                                <li><a href="#">Blog</a></li>
                            </ul>
                        </div>
                        <div className='btn'>
                            <button className='py-4 px-12 border-2 border-[rgba(244,246,252,0.2)] rounded-[40px] cursor-pointer font-medium '>Contact Us</button>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
        </> 
    )
}

export default Navbar