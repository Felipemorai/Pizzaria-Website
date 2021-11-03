import styled from 'styled-components'
import FeaturePic from '../../images/Pizza feature3.jpg'

export const FeatureContainer = styled.div`
  background: linear-grandient(to right, rgba(0, 0, 0,0.7), rgba(0, 0, 0, 0.1)),
  url(${FeaturePic});
  height: 100vh;
  max-height: 500px;
  background-position: center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
  text-align: center;
  padding: 0 1rem;

  h1 {
      font-size: clamp(3rem, 5vw, 5rem);
  }

  p {
      margin-bottom: 1rem;
      font-size: clamp(1rem, 3vw, 2rem);
  }
`

export const FeatureButton = styled.button`
  font-size: 1.4rem;
  padding: 0.6rem 3rem;
  border: none;
  background: #e31837;
  color: #fff;
  transition: 0.2s ease-out;
  border-radius: 5px;
  box-shadow: 1px 1px 5px #adb5bd;

  &:hover {
      color: #e31837;
      background: #fff;
      transition: 0.2s ease-out;
      cursor: pointer;
      box-shadow: 1px 5px 10px #adb5bd;
  }
`