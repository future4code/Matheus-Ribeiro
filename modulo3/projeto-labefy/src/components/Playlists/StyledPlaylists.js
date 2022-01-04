import styled from "styled-components";

export const ContainerPlaylist = styled.div `
  display: flex;
  align-items: center;
  background-color: #3f3f3f;
  width: 12rem;
  height: 14rem;
  border-radius: 10px;
`

export const CardPlaylist = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`
export const ImagemPlaylist = styled.img`
  width: 100%;
  padding: 1rem;
`

export const TituloPlaylist = styled.h3`
  margin-bottom: .5rem;
`
export const PlaylistWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 16.5rem;
`
export const BotaoDeletar = styled.button`
  padding: .3rem;
  border-radius: .5rem;
  border: none;
  background-color: #A94848;
  color: #f1f1f1;
`

export const PlaylistsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: .5rem;
  margin: 1rem;
`