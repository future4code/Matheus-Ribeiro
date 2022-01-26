import React from 'react'
import { useLocation, useNavigate, useParams } from "react-router-dom"
import { goToAdminHomePage, goToApplicationFormPage, goToCreateTripPage, goToHomePage, goToListTripsPage, goToLoginPage } from '../../routes/navigation'
import { MenuBar, MenuItem, NavContainer } from './StyledNavMenu'

const NavMenu = () => {
  const location = useLocation()
  const { id } = useParams()
  const navigate = useNavigate()

  const logout = (navigate) => {
    localStorage.removeItem('token')
    goToLoginPage(navigate)
  }

  return (
    <NavContainer>
      {location.pathname === '/login' && <MenuBar>
        <MenuItem />
      </MenuBar>}
      {location.pathname === '/trips/list' && <MenuBar>
        <MenuItem onClick={() => goToHomePage(navigate)}>
          ÍNÍCIO
        </MenuItem>
        <MenuItem onClick={() => goToApplicationFormPage(navigate)}>
          INSCREVA-SE
        </MenuItem>
        <MenuItem onClick={() => goToLoginPage(navigate)}>
          LOGIN
        </MenuItem>
      </MenuBar>}
      {location.pathname === '/admin/trips/list' && <MenuBar>
        <MenuItem onClick={() => goToHomePage(navigate)}>
          ÍNÍCIO
        </MenuItem>
        <MenuItem onClick={() => goToCreateTripPage(navigate)}>
          CRIAR VIAGEM
        </MenuItem>
        <MenuItem onClick={() => logout(navigate)}>
          LOGOUT
        </MenuItem>
      </MenuBar>}
      {location.pathname === '/trips/application' && <MenuBar>
        <MenuItem onClick={() => goToHomePage(navigate)}>
          ÍNÍCIO
        </MenuItem>
        <MenuItem onClick={() => goToListTripsPage(navigate)}>
          VIAGENS
        </MenuItem>
        <MenuItem onClick={() => goToLoginPage(navigate)}>
          LOGIN
        </MenuItem>
      </MenuBar>}
      {location.pathname === '/admin/trips/create' && <MenuBar>
        <MenuItem onClick={() => goToHomePage(navigate)}>
          ÍNÍCIO
        </MenuItem>
        <MenuItem onClick={() => goToAdminHomePage(navigate)}>
          VIAGENS
        </MenuItem>
        <MenuItem onClick={() => logout(navigate)}>
          LOGOUT
        </MenuItem>
      </MenuBar>}
      {location.pathname === `/admin/trips/${id}` && <MenuBar>
        <MenuItem onClick={() => goToHomePage(navigate)}>
          ÍNÍCIO
        </MenuItem>
        <MenuItem onClick={() => goToAdminHomePage(navigate)}>
          VIAGENS
        </MenuItem>
        <MenuItem onClick={() => logout(navigate)}>
          LOGOUT
        </MenuItem>
      </MenuBar>}
    </NavContainer>
  )
}

export default NavMenu
