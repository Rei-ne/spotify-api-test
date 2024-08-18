import SpotifyNowPlaying from './SpotifyNowPlaying'
import spotifyLogo from './assets/icons/spotifyLogo.svg'
function App() {

  return (
    <div className="flex flex-col items-center justify-center w-full h-screen bg-black font-GT_Flexa">
      <SpotifyNowPlaying />

      <p className='text-white mt-8 text-center w-4/5 md:w-full'>Read my article <a className='underline' href='https://reine.hashnode.dev/how-to-connect-your-react-vitejs-app-to-spotifys-api' target='_blank'>here</a> to see how this works!</p>
    </div>
  )
}

export default App
