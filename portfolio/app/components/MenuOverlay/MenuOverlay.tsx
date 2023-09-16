import React from 'react'
import NavLink from '../NavLink/NavLink'

function MenuOverlay(links: any ) {
  return (
    <ul className='flex flex-col py-4 items-center '>
        {   
            links.map((link: listLink, index: number) => {
                <li key={index}>
                    <NavLink key={index} href={link.href} title={link.title} />
                </li>
            })
        }
            
    </ul>
  )
}

export default MenuOverlay