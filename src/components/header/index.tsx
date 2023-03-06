import { useEffect, useState } from 'react'
import { useScrollDirection } from '../../hooks/useScrollDirection';
import * as C from "./style";
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';

function Header() {
  const { pathname } = useRouter();
  console.log(pathname);
  
  const [dark, setDark] = useState<boolean>(false);

  // menu
  const [activeMenu, setActiveMenu] = useState<boolean>(false);
  useEffect(() => setActiveMenu(false), [pathname]);

  const { direction } = useScrollDirection();
  return (
    <C.Container direction={direction}>
      <C.LogoContainer>
        <Link href="/">
          <Image src='/logo.svg' alt='' fill />
        </Link>
      </C.LogoContainer>
      <C.Main>
        <C.MenuToggle 
          active={activeMenu} 
          onClick={()=> setActiveMenu(!activeMenu)}
        >
          <span />
          <span />
          <span />
        </C.MenuToggle>
        <C.Menu active={activeMenu}>
          <C.ItemMenu 
            href={"/"} 
            route={pathname}
          >Inicio</C.ItemMenu>
          
          <C.ItemMenu 
            href={"/articles"} 
            route={pathname}
          >Artigos</C.ItemMenu>
          
          <C.ItemMenu 
            href={"/post"} 
            route={pathname}
          >Projetos</C.ItemMenu>
          
          <C.ItemMenu 
            href={"/contact"} 
            route={pathname}
          >Contato</C.ItemMenu>
          
          <C.ItemMenu 
            href={"/about"} 
            route={pathname}
          >Sobre mim</C.ItemMenu>
          <C.Theme dark={dark} onClick={()=> setDark(!dark)} />
        </C.Menu>
      </C.Main>
    </C.Container>
  )
}

export default Header