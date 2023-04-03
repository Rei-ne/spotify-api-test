import spotifyLogo from './assets/icons/spotifyLogo.svg'
function App() {

  return (
    <div className="flex flex-col items-center justify-center w-full h-screen bg-black">
      <div className="flex items-center justify-between gap-6 w-fit border border-mint">
        <div>
          <img src={spotifyLogo} alt="spotify-logo" />
        </div>
        <p className="text-white font-GT_Flexa">NOT CONNECTED</p>
      </div>
    </div>
  )
}

export default App
