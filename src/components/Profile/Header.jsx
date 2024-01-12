import '../Profile/Header.css';

function Header () {
  return(
    <header className='header-container'>
      <div>
        <h1 className='title'>Hi, i'm Mateus! 👋</h1>
        <p className='work'>Software Developer</p>
      </div>
      <img className='photoProfile' src="https://avatars.githubusercontent.com/u/110947775?v=4" alt="foto do desenvolvedor" />
    </header>
  );
}

export default Header