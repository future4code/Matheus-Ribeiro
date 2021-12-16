import styled from "styled-components";

export const ContainerNomePlaylist = styled.div`
  display: flex;
  height: 8rem;
`

export const NomePlaylist = styled.h1`
  font-size: 3rem;
  padding: 2rem ;
`

export const ContainerTrack = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 3rem;
  background-color: #4f4f4f;
  margin-bottom: 20px;
`
export const TrackCard = styled.div`
  display: flex;
  align-items: center;
  margin: 0 4rem;
  justify-content: space-between;
  height: 100%;
`
export const Track = styled.p`
  font-size: 1rem;
  justify-self: flex-start;
`
export const Player = styled.audio`
  width: 30%;
  height: 80%;
`