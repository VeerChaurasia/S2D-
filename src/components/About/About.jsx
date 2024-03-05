import React from 'react';
import Web3 from '../../assests/image1.png';
import STC from '../../assests/images.svg'
import './About.css'
import Blockchain from '../../assests/blockchain.jpg'
import future from '../../assests/web3.jpeg'

function About() {
  return (
    <div name='About' className='main'>
        {/* <h1 className='about'>About</h1> */}
        
        
        <section className='info1'>
            <div className='paras'>
                <div className='text'>
                    <p className='big'>
                    What is StackTooDeep
                    </p>
                    <p className='small'>
                    StackTooDeep is the inaugural ethereum focused hackathon conducted by Blockchain Society IIT Roorkee. It aims to foster a culture of web3 development in our campus and promotes decentralized innovation!



                    </p>
                </div>
                

            </div>
            <div className='ret'>
                <img src={Web3} className='image1'/>
            </div>
            
        </section>
        <section className='info1'>
            <div className='ret'>
                <img src={Blockchain} className='image1'/>
            </div>
            <div className='paras'>
                <div className='text'>
                    <p className='big'>
                    You win or you learn!
                    </p>
                    <p className='small'>
                    While we have prizes for the top three teams, as well as specific prizes for some tracks and of course the awesome swag for all, the best takeaway for all will be the unparalleled learning experience and memories to remember forever (or at least a year).

                    </p>
                </div>
                

            </div>
            
            
        </section>
        <section className='info1'>
            
            
            <div className='paras'>
                <div className='text'>
                    <p className='big'>
                    Web3||The Future
                    </p>
                    <p className='small'>
                    While we have prizes for the top three teams, as well as specific prizes for some tracks and of course the awesome swag for all, the best takeaway for all will be the unparalleled learning experience and memories to remember forever (or at least a year).

                    </p>
                </div>
                

            </div>
            <div className='ret'>
                <img src={future} className='image1'/>
            </div>
            
            
            
        </section>

        
    </div>
  )
}

export default About