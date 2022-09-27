import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import logo from '../logo.svg'
import { FaCartArrowDown } from "react-icons/fa";
import ButtonContainer from './Button';
import styled from 'styled-components';

export default class Navbar extends Component {
  render() {
    return (
      <NavWrapper className='navbar navbar-expand-sm bg-primary navbar-dark px-sm-5'>
        <div style={{display:'flex'}}>
          <Link to='/' >
            <img src={logo} alt='store' className='Navbar' />
          </Link>
          <ul className='navbar-nav aligh-items-center' style={{paddingLeft:'60px'}}>
            <li className='nav-item ml-5'><Link to="/" className='nav-link'>products</Link></li>
          </ul>
        </div>

        <Link to='/cart' className='ml-auto'>
          <ButtonContainer>
            <span style={{marginRight:'1rem'}}>
              <FaCartArrowDown />
            </span>
            My cart
          </ButtonContainer>
        </Link>
      </NavWrapper>

    )
  }
}

const NavWrapper=styled.nav`
  background:var(--mainBlue);
  display:flex;
  justify-content:space-between!important;
  .nav-link{
    color:var(--mainWhite)!important;
    font-size:1.3rem;
    text-transform:capitalize!important;
  }
`
