import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'

function HeaderSocials() {
  return (
    <div className='header__socials'>
        <a href="https://linkedin.com/in/muhamad-anni-azis/" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/crashper77/" target="_blank"><FaGithub/></a>
        <a href="https://instagram.com/ajessss_/" target="_blank"><FaInstagram/></a>
    </div>
  )
}

export default HeaderSocials