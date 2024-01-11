import '../Profile/Header.css';

function Header () {
  return(
    <header>
      <div>
        <h1 className='title'>Hi, i'm Mateus! 👋</h1>
        <p className='subtitle'>Software Developer</p>
      </div>
      <img className='photoProfile' src="https://avatars.githubusercontent.com/u/110947775?v=4" alt="foto do desenvolvedor" />
    </header>
  );
}

export default Header