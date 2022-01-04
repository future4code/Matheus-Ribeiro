import styled from "styled-components";

export const ContainerNomePlaylist = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
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
  margin: 20px 0;
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

export const Wrapper = styled.div`
  width: 10rem;
`

export const BotaoAddTrack = styled.button`
  padding: .5rem;
  margin-left: 2.5rem;
  margin-bottom: 1rem;
  border-radius: 10px;
  font-size: 1rem;
  background-color: blueviolet;
  border: none;
  color: white;
  cursor: pointer;

 :disabled  {
    opacity: .4;
  }
`

export const ContainerAddTrack = styled.div `
width: 100%;
`