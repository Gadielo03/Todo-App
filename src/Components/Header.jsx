import githubIcon from '../assets/githubIcon.svg'
const Header = () => {
    return(
        <header className="bg-myblue  h-12 m-2 rounded-2xl flex justify-between w-5/6 text-white p-2 text-justify pt-3 font-semibold font-mono px-5"   >
            <h1 >To do App</h1>
            <div className="flex gap-3">
            <p>Made by Gady</p>
            <a href="https://github.com/Gadielo03" >
                <img src={githubIcon} alt="githubIcon" className="h-6 w-6"/>
            </a>
            </div>
        </header>
    )
}

export default Header;