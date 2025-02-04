export default function Navbar() {
    return (
      <div className="topnav" style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
      }}>
        <h1>Kanbanana</h1>
        <img src="./src/assets/p6.jpg" alt="A banana" style={{ width: '4vw' }}/>
      </div>
    );
  }